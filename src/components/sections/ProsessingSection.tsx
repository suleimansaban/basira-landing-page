'use client';
export default function ProcessSection() {
  const processSteps = [
    {
      id: 1,
      title: 'Assessment',
      description: 'A thorough analysis of the client\'s current state, identifiying root causes of challenges and mapping opportunities',
      icon: '/images/img_test_results.png',
      bgColor: 'bg-primary-background',
      textColor: 'text-text-inverse',
      descColor: 'text-text-inverse'
    },
    {
      id: 2,
      title: 'Strategy',
      description: 'A thorough analysis of the client\'s current state, identifiying root causes of challenges and mapping opportunities',
      icon: '/images/img_mind_map.png',
      bgColor: 'bg-background-main',
      textColor: 'text-text-primary',
      descColor: 'text-text-secondary'
    },
    {
      id: 3,
      title: 'Execution',
      description: 'Working hand-in-hand with client teams to ensure effective implementation of strategies, providing guidance and suppport',
      icon: '/images/img_goal.png',
      bgColor: 'bg-background-main',
      textColor: 'text-text-primary',
      descColor: 'text-text-secondary'
    },
    {
      id: 4,
      title: 'Sustainability',
      description: 'Working hand-in-hand with client teams to ensure effective implementation of strategies, providing guidance and suppport',
      icon: '/images/img_greentech.png',
      bgColor: 'bg-background-main',
      textColor: 'text-text-primary',
      descColor: 'text-text-secondary'
    }
  ]

  return (
    <section className="w-full py-[31px] sm:py-[10px]">
      <div className="w-full max-w-[1440px] mx-auto px-[28px] sm:px-[56px]">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[15px] sm:gap-[30px] w-full">
          {processSteps?.map((step, index) => (
            <div key={step?.id} className="flex items-center gap-[15px] sm:gap-[30px] w-full sm:w-auto">
              
              {/* Process Card */}
              <div className={`${step?.bgColor} rounded-xl p-[9px] sm:p-[18px] flex flex-col justify-start items-start gap-[13px] sm:gap-[26px] w-full sm:w-[153px] min-h-[122px] sm:min-h-[244px] hover:scale-105 transition-transform duration-300`}>
                
                {/* Icon and Arrow Container */}
                <div className="flex justify-between items-start w-full">
                  <img 
                    src={step?.icon} 
                    alt={step?.title}
                    className="w-[29px] sm:w-[58px] h-[32px] sm:h-[64px]"
                    loading="lazy"
                  />
                  {step?.id === 1 && (
                    <img 
                      src="/images/img_right_arrow.png" 
                      alt=""
                      className="w-[17px] sm:w-[34px] h-[17px] sm:h-[34px] mt-[6px] sm:mt-[12px]"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                  <h3 className={`text-[16px] sm:text-lg font-lato font-bold leading-[20px] sm:leading-xl ${step?.textColor}`}>
                    {step?.title}
                  </h3>
                  <p className={`text-[12px] sm:text-base font-lato font-normal leading-[15px] sm:leading-base ${step?.descColor}`}>
                    {step?.description}
                  </p>
                </div>
              </div>
              
              {/* Vertical Line Separator */}
              {index < processSteps?.length - 1 && (
                <div className="hidden sm:block">
                  {index === 0 || index === 3 ? (
                    <div className="w-[1px] sm:w-[2px] h-[122px] sm:h-[244px] bg-border-primary" />
                  ) : (
                    <div className="w-[2px] h-[244px] bg-border-primary" />
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Final separator line */}
          <div className="hidden sm:block w-[1px] sm:w-[2px] h-[122px] sm:h-[244px] bg-border-primary" />
        </div>
      </div>
    </section>
  );
}