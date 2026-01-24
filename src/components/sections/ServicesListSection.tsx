'use client';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
  reversed?: boolean;
}

interface ServicesListSectionProps {
  services: ServiceItem[];
}

export default function ServicesListSection({ services }: ServicesListSectionProps) {
  return (
    <section className="w-full py-[39px] sm:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-start gap-[39px] sm:gap-[78px] w-full">

          {services.map((service) => (
            <div key={service.id} className="w-full">
              <div className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-start items-center gap-[20px] sm:gap-[40px] w-full`}>

                {/* Content Section */}
                <div className="w-full lg:flex-1">
                  <div className="flex flex-col justify-start items-start gap-[15px] sm:gap-[30px]">

                    {/* Icon and Title */}
                    <div className="flex justify-start items-center gap-[10px] sm:gap-[20px]">
                      <div className="bg-primary-background rounded-md p-[8px] sm:p-[16px] flex justify-center items-center w-[35px] sm:w-[70px] h-[35px] sm:h-[70px]">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-lato font-bold leading-[24px] sm:leading-[28px] md:leading-[32px] text-left text-text-primary">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] font-lato font-normal leading-[21px] sm:leading-[23px] text-left text-text-secondary">
                      {service.description}
                    </p>

                    {/* Items List */}
                    <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[12px] w-full mt-[8px] sm:mt-[16px]">
                      {service.items.map((item, index) => (
                        <div key={index} className="flex justify-start items-start gap-[8px] sm:gap-[12px]">
                          <div className="mt-[2px] flex-shrink-0">
                            <svg className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="10" fill="#0019BA"/>
                              <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-[13px] sm:text-[14px] font-lato font-normal leading-[19px] sm:leading-[21px] text-left text-text-secondary">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[45%]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[200px] sm:h-[300px] md:h-[350px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
