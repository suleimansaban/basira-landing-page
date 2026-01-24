'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef } from 'react';

const editTextClasses = cva(
  'w-full px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input-background border border-input-border focus:ring-primary-background focus:border-primary-background',
        filled: 'bg-background-light border border-transparent focus:ring-primary-background',
        outline: 'bg-transparent border-2 border-input-border focus:ring-primary-background focus:border-primary-background',
      },
      size: {
        small: 'text-sm py-1.5',
        medium: 'text-base py-2',
        large: 'text-lg py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

type EditTextProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof editTextClasses> & {
  // Required parameters with defaults
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;

  // Optional parameters
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;

  // Additional props
  label?: string;
  error?: string;
  helperText?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults (mapped to style JSON where possible)
  fill_background_color = "bg-input-background", // Maps to #ffffff
  border_border = "1px solid border-input-border", // Maps to #e6e6e6
  border_border_radius = "rounded-md", // Maps to 10px
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Additional props
  label,
  error,
  helperText,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  type = 'text',
  placeholder,
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  // Parse padding string
  const parsePadding = (paddingStr: string) => {
    const paddingMap: { [key: string]: string } = {}
    paddingStr.split(',').forEach(item => {
      const [side, value] = item.split('=')
      if (side && value) {
        paddingMap[side.trim()] = value.trim()
      }
    })
    return [
      paddingMap.t ? `pt-[${paddingMap.t}]` : '',
      paddingMap.r ? `pr-[${paddingMap.r}]` : '',
      paddingMap.b ? `pb-[${paddingMap.b}]` : '',
      paddingMap.l ? `pl-[${paddingMap.l}]` : '',
    ].filter(Boolean).join(' ')
  }

  // Parse margin string
  const parseMargin = (marginStr: string) => {
    const marginMap: { [key: string]: string } = {}
    marginStr.split(',').forEach(item => {
      const [side, value] = item.split('=')
      if (side && value) {
        marginMap[side.trim()] = value.trim()
      }
    })
    return [
      marginMap.t ? `mt-[${marginMap.t}]` : '',
      marginMap.r ? `mr-[${marginMap.r}]` : '',
      marginMap.b ? `mb-[${marginMap.b}]` : '',
      marginMap.l ? `ml-[${marginMap.l}]` : '',
    ].filter(Boolean).join(' ')
  }

  // Parse border string (e.g., "1 solid #e6e6e6")
  const parseBorder = (borderStr: string) => {
    const parts = borderStr.split(' ')
    if (parts.length >= 3) {
      const width = parts[0]
      const style = parts[1]
      const color = parts[2]
      return `border-[${width}px] border-${style} border-[${color}]`
    }
    return 'border'
  }

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? parsePadding(padding!) : '',
    hasValidMargin ? parseMargin(margin!) : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build Tailwind classes for styling
  const styleClasses = [
    fill_background_color,
    border_border.includes('solid') ? parseBorder(border_border) : border_border,
    border_border_radius,
  ].filter(Boolean).join(' ')

  const inputId = props.id || `input-${Math.random().toString(36).substring(2, 11)}`

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-text-primary mb-1"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={inputId}
        disabled={disabled}
        placeholder={placeholder}
        className={twMerge(
          editTextClasses({ variant, size }),
          styleClasses,
          optionalClasses,
          error ? 'border-red-500 focus:ring-red-500' : '',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-text-secondary">
          {helperText}
        </p>
      )}
    </div>
  )
})

EditText.displayName = 'EditText'

export default EditText