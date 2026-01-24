'use client';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(3) // Center image (4th index, 0-based)

  const testimonialImages = [
    { id: 1, src: '/images/img_ellipse_75.png', alt: 'Client testimonial 1' },
    { id: 2, src: '/images/img_ellipse_76.png', alt: 'Client testimonial 2' },
    { id: 3, src: '/images/img_ellipse_77.png', alt: 'Client testimonial 3' },
    { id: 4, src: '/images/img_ellipse_71.png', alt: 'Featured client testimonial' }, // Main active
    { id: 5, src: '/images/img_ellipse_72.png', alt: 'Client testimonial 5' },
    { id: 6, src: '/images/img_ellipse_73.png', alt: 'Client testimonial 6' },
    { id: 7, src: '/images/img_ellipse_74.png', alt: 'Client testimonial 7' }
  ]

  const handlePrevious = (): void => {
    setCurrentTestimonial(prev => prev > 0 ? prev - 1 : testimonialImages.length - 1)
  }

  const handleNext = (): void => {
    setCurrentTestimonial(prev => prev < testimonialImages.length - 1 ? prev + 1 : 0)
  }

  const handleImageClick = (index: number): void => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="w-full py-[49px] sm:py-[98px]">
      <div className="w-full max-w-[1440px] mx-auto px-[28px] sm:px-[56px]">
        <div className="flex flex-col justify-start items-center gap-[27.5px] sm:gap-[55px] w-[90%] sm:w-[60%] mx-auto">
          
          {/* Section Title */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-left text-text-accent">
            Testimonials
          </h2>
          
          {/* Testimonial Images Carousel */}
          <div className="flex justify-center items-center gap-[12px] sm:gap-[24px] w-full mt-[44px] sm:mt-[88px]">
            
            {/* Previous Arrow */}
            <button
              onClick={handlePrevious}
              className="flex justify-center items-center w-[12px] sm:w-[24px] h-[12px] sm:h-[24px] hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background rounded"
              aria-label="Previous testimonial"
            >
              <img 
                src="/images/img_circle_arrow_left_01.svg" 
                alt=""
                className="w-full h-full"
              />
            </button>
            
            {/* Testimonial Images */}
            <div className="flex justify-center items-center gap-[6px] sm:gap-[12px]">
              {testimonialImages.map((image, index) => {
                const isActive = index === currentTestimonial
                const imageSize = isActive ? 'w-[45px] sm:w-[90px] h-[45px] sm:h-[90px]' : 'w-[35px] sm:w-[70px] h-[35px] sm:h-[70px]'
                const borderRadius = isActive ? 'rounded-[22px] sm:rounded-[44px]' : 'rounded-[17px] sm:rounded-[34px]'
                
                return (
                  <button
                    key={image.id}
                    onClick={() => handleImageClick(index)}
                    className={`${imageSize} ${borderRadius} overflow-hidden hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-background ${
                      isActive ? 'ring-2 ring-accent-primary' : ''
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>
            
            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="flex justify-center items-center w-[12px] sm:w-[24px] h-[12px] sm:h-[24px] hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background rounded mb-[14px] sm:mb-[28px]"
              aria-label="Next testimonial"
            >
              <img 
                src="/images/img_circle_arrow_left_01.svg" 
                alt=""
                className="w-full h-full rotate-180"
              />
            </button>
          </div>
          
          {/* Testimonial Content */}
          <div className="flex flex-col sm:flex-row justify-start items-end gap-[9px] sm:gap-[18px] w-full mt-[9px] sm:mt-[18px]">
            
            {/* Main Testimonial */}
            <div className="flex justify-start items-center w-full sm:flex-1">
              <div className="bg-[url('/images/img_rectangle_269.svg')] bg-cover bg-center bg-no-repeat px-[25px] sm:px-[50px] pr-[26px] sm:pr-[52px] py-[60px] sm:py-[120px] w-full rounded-lg">
                <p className="text-[11px] sm:text-[13px] font-lato font-black leading-[14px] sm:leading-[19px] text-center text-text-inverse">
                  BasiraView helped us gain clarity where we previously had uncertainty. Their strategic insight 
                  transformed our direction, improved execution, and delivered measurable growth. They did not 
                  just advise — they partnered with us to achieve results.
                </p>
              </div>
            </div>
            
            {/* Side Indicators */}
            <div className="flex flex-row sm:flex-col gap-[4px] sm:gap-[8px]">
              <div className="bg-accent-purple shadow-[0px_4px_4px_#0000003f] rounded-sm w-[7px] sm:w-[14px] h-[59px] sm:h-[118px] mb-[9px] sm:mb-[18px]" />
              <div className="bg-accent-purple shadow-[0px_4px_4px_#0000003f] rounded-sm w-[7px] sm:w-[14px] h-[54.5px] sm:h-[109px] mb-[13px] sm:mb-[26px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}