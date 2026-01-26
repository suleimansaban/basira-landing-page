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
      'bg-green-100',     // Light green for Strategy & Business advisory
      'bg-blue-100',      // Light blue for Microfinance & Financial
      'bg-orange-100',    // Light orange for Training & Capacity
      'bg-yellow-100',    // Light yellow for Legal & Governance
      'bg-blue-100',      // Light blue for Technology & Digital
      'bg-green-100'      // Light green for Real Estate & Property
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="w-full bg-white py-12 sm:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16 w-full">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6 w-full">
            <div className="flex flex-col justify-start items-start gap-4 w-full lg:max-w-[70%]">
              <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-lato font-bold leading-tight text-black">
                Our Comprehensive <span className="text-[#FF6B35]">Services</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] font-lato font-normal leading-relaxed text-gray-700">
                Our integrated services are designed to help organizations overcome todays challenges while
                preparing for the opportunities of tomorrow, supporting financial institutions, corporates and public sector organization in achieveing resilience and lasting impacts.
              </p>
            </div>

            <Button
              text="Learn More"
              text_font_size="text-sm"
              text_font_family="Inter"
              text_font_weight="font-bold"
              text_line_height="leading-sm"
              text_text_align="left"
              text_color="text-white"
              fill_background_color="bg-[#2B4C9D]"
              border_border_radius="rounded-lg"
              padding="t=14px,r=40px,b=14px,l=40px"
              onClick={handleLearnMore}
              className="hover:scale-105 active:scale-95 transition-transform duration-200 whitespace-nowrap self-start lg:self-center"
            />
          </div>
          
          {/* Services Grid */}
          <div className="w-full">
            {loading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white border-2 border-gray-300 rounded-2xl p-6 flex flex-col justify-start items-start gap-4 min-h-[240px]">
                    <div className="animate-pulse bg-gray-200 rounded-xl w-[70px] h-[70px]" />
                    <div className="flex flex-col justify-start items-start gap-3 w-full">
                      <div className="animate-pulse bg-gray-200 rounded h-6 w-3/4" />
                      <div className="animate-pulse bg-gray-200 rounded h-20 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Actual services
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={service.id} className="bg-white border-2 border-gray-300 rounded-2xl p-6 flex flex-col justify-start items-start gap-4 min-h-[240px] hover:shadow-lg transition-shadow duration-300">

                    {/* Service Icon */}
                    <div className={`${getServiceBackgroundColor(index)} rounded-xl p-4 flex justify-center items-center w-[70px] h-[70px]`}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-[40px] h-[40px] object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="flex flex-col justify-start items-start gap-3 w-full">
                      <h3 className="text-[18px] sm:text-[20px] font-lato font-bold leading-tight text-black">
                        {service.title}
                      </h3>
                      <p className="text-[14px] font-lato font-normal leading-relaxed text-gray-700">
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