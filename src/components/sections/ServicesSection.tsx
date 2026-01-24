'use client';

import Button from "../ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
  loading: boolean;
}

export default function ServicesSection({ services, loading }: ServicesSectionProps) {
  const handleLearnMore = (): void => {
    // Navigate to services page or open service details
  }

  const getServiceBackgroundColor = (index: number): string => {
    const colors = [
      'bg-accent-success-alt',     // Green for Strategy & Business advisory
      'bg-primary-dark',           // Blue for Microfinance & Financial
      'bg-accent-primary-light',   // Orange for Training & Capacity
      'bg-accent-warning',         // Yellow for Legal & Governance
      'bg-secondary-overlay',      // Light blue for Technology & Digital
      'bg-accent-success'          // Green for Real Estate & Property
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="w-full bg-primary-light py-[26px] sm:py-[52px] mt-[44px] sm:mt-[88px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-start items-center gap-[29px] sm:gap-[58px] w-full">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-[15px] sm:gap-[30px] w-[90%] sm:w-[86%] px-4 sm:px-0">
            <div className="flex flex-col justify-start items-center gap-[5px] sm:gap-[10px] w-full sm:flex-1">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-center text-text-primary">
                <span className="text-text-primary">Our Comprehensive</span>
                <span className="text-accent-primary"> Services</span>
              </h2>
              <p className="text-[13px] sm:text-md font-lato font-normal leading-[16px] sm:leading-md text-left text-text-secondary mt-[9px] sm:mt-[18px] max-w-4xl text-center">
                Our integrated services are designed to help organizations overcome todays challenges while 
                preparing for the opportunities of tomorrow, supporting financial institutions, corporates and public sector organiziation in achieveing resilience and lasting impacts.
              </p>
            </div>
            
            <Button
              text="Learn More"
              text_font_size="text-sm"
              text_font_family="Inter"
              text_font_weight="font-bold"
              text_line_height="leading-sm"
              text_text_align="left"
              text_color="text-button-text"
              fill_background_color="bg-primary-background"
              border_border_radius="rounded-md"
              padding="t=12px,r=34px,b=12px,l=28px"
              onClick={handleLearnMore}
              className="hover:scale-105 active:scale-95 transition-transform duration-200 mt-4 sm:mt-0"
            />
          </div>
          
          {/* Services Grid */}
          <div className="w-full max-w-[1272px] mx-auto px-[2px] sm:px-[18px] mb-[6px] sm:mb-[12px]">
            {loading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-background-main rounded-md p-[9px] sm:p-[18px] flex flex-col justify-start items-start gap-[13px] sm:gap-[26px] min-h-[200px] sm:min-h-[400px]">
                    <div className="animate-pulse bg-background-light rounded-md w-[41px] sm:w-[82px] h-[37px] sm:h-[74px]" />
                    <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                      <div className="animate-pulse bg-background-light rounded h-[12px] sm:h-[24px] w-3/4" />
                      <div className="animate-pulse bg-background-light rounded h-[48px] sm:h-[96px] w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Actual services
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {services.map((service, index) => (
                  <div key={service.id} className="bg-background-main rounded-md p-[9px] sm:p-[18px] flex flex-col justify-start items-start gap-[13px] sm:gap-[26px] min-h-[200px] sm:min-h-[400px] hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                    
                    {/* Service Icon */}
                    <div className={`${getServiceBackgroundColor(index)} rounded-md p-[6px] sm:p-[12px] flex justify-center items-center w-[41px] sm:w-[82px] h-[37px] sm:h-[74px]`}>
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-[24px] sm:w-[48px] h-[24px] sm:h-[48px] object-contain"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Service Content */}
                    <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                      <h3 className="text-[16px] sm:text-lg font-lato font-bold leading-[20px] sm:leading-xl text-left text-text-primary">
                        {service.title}
                      </h3>
                      <p className="text-[12px] sm:text-base font-lato font-normal leading-[15px] sm:leading-base text-left text-text-secondary mb-[6px] sm:mb-[12px] lg:mb-[24px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}