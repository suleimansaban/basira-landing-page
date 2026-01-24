'use client';
export default function CoreValuesSection() {
  const coreValues = [
    {
      id: 1,
      title: 'Practical Solutions',
      description: 'Every recommendation isi grounded in realities that clients can implement immediately, moving beyond mere theory',
      icon: '/images/img_group_7.svg'
    },
    {
      id: 2,
      title: 'Measurable Impact',
      description: 'Success is defined by qauntifiable results, including improved profitabilty, stronger governance, and enhanced operational efficiancy',
      icon: '/images/img_group_5.svg'
    },
    {
      id: 3,
      title: 'Cross- Sector Knowledge',
      description: 'Expertise spanning financial services, FMCG, real estate, and IT allows us to adapt and innovate solutions across diverse industries',
      icon: '/images/img_group_6.svg'
    },
    {
      id: 4,
      title: 'Innovation With Purpose',
      description: 'We walk with our clients through implementation ensuring long-term value creation and institutional resilience',
      icon: '/images/img_group_4.svg'
    }
  ]

  return (
    <section className="w-full bg-primary-background py-[21px] sm:py-[42px]">
      <div className="flex flex-col justify-start items-center gap-[34px] sm:gap-[68px] w-full">
        
        {/* Section Header */}
        <div className="flex flex-col justify-start items-center gap-[2px] sm:gap-[4px] w-full">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-center text-text-inverse">
            Our Core Values
          </h2>
          <p className="text-[13px] sm:text-md font-lato font-normal leading-[16px] sm:leading-md text-center text-text-inverse mt-[2px] sm:mt-[4px] max-w-4xl px-4">
            BasiraView Consulting goes beyond providing advice; we deliver solutions that create measurable, 
            tangible, and sustainable value. Our proposition is built on a commitment to practical, 
            results-oriented delivery and deep sector knowledge
          </p>
        </div>
        
        {/* Core Values Content */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="w-full max-w-[1272px] mx-auto mb-[10px] sm:mb-[20px]">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[15px] sm:gap-[30px] w-full">
              
              {/* Hero Image */}
              <div className="w-full lg:w-[36%]">
                <img 
                  src="/images/img_rectangle_265.png" 
                  alt="Core values illustration"
                  className="w-full h-[227px] sm:h-[454px] object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              
              {/* Values Grid */}
              <div className="w-full lg:flex-1 lg:ml-[15px] sm:lg:ml-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] sm:gap-[30px] w-full">
                  {coreValues?.map((value, index) => (
                    <div key={value?.id} className={`flex flex-col justify-start items-start gap-[8px] sm:gap-[16px] w-full ${
                      index >= 2 ? 'mt-[15px] sm:mt-[30px]' : ''
                    }`}>
                      
                      {/* Icon */}
                      <div className="bg-icon-background rounded-md p-[7px] sm:p-[14px] flex justify-center items-center w-[31px] sm:w-[62px] h-[30px] sm:h-[60px]">
                        <img 
                          src={value?.icon} 
                          alt={value?.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col justify-start items-start gap-[8px] sm:gap-[16px] w-full">
                        <h3 className="text-[16px] sm:text-lg font-lato font-bold leading-[20px] sm:leading-xl text-left text-text-inverse">
                          {value?.title}
                        </h3>
                        <p className="text-[12px] sm:text-base font-lato font-normal leading-[15px] sm:leading-base text-left text-text-inverse">
                          {value?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}