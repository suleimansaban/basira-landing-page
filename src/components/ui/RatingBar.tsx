'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const ratingBarClasses = cva(
  'inline-flex items-center gap-1',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
      variant: {
        default: '',
        outlined: '',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  }
)

interface RatingBarProps extends VariantProps<typeof ratingBarClasses> {
  // Optional parameters
  layout_width?: string;
  position?: string;
  
  // Rating specific props
  value?: number;
  maxRating?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  showValue?: boolean;
  starColor?: string;
  emptyStarColor?: string;
  className?: string;
}

const RatingBar = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Rating props with defaults
  value = 0,
  maxRating = 5,
  onChange,
  readonly = false,
  showValue = false,
  starColor = '#fa4e09',
  emptyStarColor = '#d9d9d9',
  
  // Standard React props
  size,
  variant,
  className,
}: RatingBarProps) => {
  const [hoverRating, setHoverRating] = useState(0)
  const [currentRating, setCurrentRating] = useState(value)

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  const handleStarClick = (rating: number) => {
    if (readonly) return
    
    setCurrentRating(rating)
    if (onChange) {
      onChange(rating)
    }
  }

  const handleStarHover = (rating: number) => {
    if (readonly) return
    setHoverRating(rating)
  }

  const handleMouseLeave = () => {
    if (readonly) return
    setHoverRating(0)
  }

  const displayRating = hoverRating || currentRating

  const starSize = size === 'small' ? 16 : size === 'large' ? 24 : 20

  return (
    <div 
      className={twMerge(
        ratingBarClasses({ size, variant }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
    >
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= displayRating
        
        return (
          <button
            key={index}
            type="button"
            className={`focus:outline-none focus:ring-2 focus:ring-primary-background rounded transition-all duration-150 ${
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            }`}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
            disabled={readonly}
            aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
            role="radio"
            aria-checked={starValue === currentRating}
          >
            <svg
              width={starSize}
              height={starSize}
              viewBox="0 0 24 24"
              fill={isFilled ? starColor : emptyStarColor}
              stroke={isFilled ? starColor : emptyStarColor}
              strokeWidth="1"
              className="transition-colors duration-150"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </button>
        )
      })}
      
      {showValue && (
        <span className="ml-2 text-sm text-text-secondary">
          {currentRating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  )
}

export default RatingBar