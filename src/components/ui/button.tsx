'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import {  ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-button-primary-bg text-button-text hover:bg-primary-dark focus:ring-primary-background',
        secondary: 'bg-button-secondary-bg text-button-text hover:bg-accent-primary-light focus:ring-accent-primary',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-background',
        ghost: 'bg-transparent text-text-primary hover:bg-background-light focus:ring-primary-background',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        medium: 'text-sm px-4 py-3',
        large: 'text-base px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults (mapped to style JSON where possible)
  text = "Button",
  text_font_size = "text-sm", // Maps to 14px
  text_font_family = "Inter",
  text_font_weight = "font-bold", // Maps to 700
  text_line_height = "leading-sm", // Maps to 17px
  text_text_align = "left",
  text_color = "text-button-text", // Maps to #ffffff
  fill_background_color = "bg-button-secondary-bg", // Maps to #fa4e09
  border_border_radius = "rounded-md", // Maps to 10px
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  // Parse padding string (e.g., "t=12px,r=28px,b=12px,l=28px")
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

  // Parse margin string (e.g., "l=246px")
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

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? parsePadding(padding) : '',
    hasValidMargin ? parseMargin(margin) : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    ...(text_text_align && { textAlign: text_text_align as any }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    border_border_radius,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button