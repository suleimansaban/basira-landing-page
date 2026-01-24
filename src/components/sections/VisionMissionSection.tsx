'use client';

export default function VisionMissionSection() {
  return (
    <section className="w-full py-[39px] sm:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1272px] mx-auto">
          <div className="flex flex-col justify-start items-start gap-[39px] sm:gap-[78px] w-full">

            {/* Our Vision */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-[15px] sm:gap-[30px] w-full">
              {/* Vision Heading */}
              <div className="w-full lg:w-auto lg:min-w-[200px]">
                <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-lato font-black leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[52px] text-left text-text-primary">
                  Our <span className="text-accent-primary">Vision</span>
                </h2>
                <div className="w-[152px] h-[3px] sm:h-[4px] bg-primary-background mt-[8px] sm:mt-[12px]" />
              </div>

              {/* Vision Content Box */}
              <div className="flex-1 w-full border-[3px] sm:border-[4px] border-primary-background rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] px-[20px] sm:px-[40px] py-[20px] sm:py-[30px] lg:py-[35px] bg-background-main">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lato font-normal leading-[21px] sm:leading-[23px] md:leading-[24px] text-left text-text-secondary">
                  Our Vision is to be Africa's most trusted and innovative consulting partner, empowering organization to achieve sustainable growth, financial inclusion and operational excellence
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col lg:flex-row-reverse justify-start items-center gap-[15px] sm:gap-[30px] w-full">
              {/* Mission Heading */}
              <div className="w-full lg:w-auto lg:min-w-[200px] lg:text-right">
                <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-lato font-black leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[52px] text-left lg:text-right text-text-primary">
                  Our <span className="text-accent-primary">Mission</span>
                </h2>
                <div className="w-[152px] h-[3px] sm:h-[4px] bg-primary-background mt-[8px] sm:mt-[12px] lg:ml-auto" />
              </div>

              {/* Mission Content Box */}
              <div className="flex-1 w-full border-[3px] sm:border-[4px] border-primary-background rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] px-[20px] sm:px-[40px] py-[20px] sm:py-[30px] lg:py-[35px] bg-background-main">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-lato font-normal leading-[21px] sm:leading-[23px] md:leading-[24px] text-left text-text-secondary">
                  Our Mission is to deliver transformational advisory, research and training solutions that enhance profitability, strengthening governance and build resilient institutions equipped to thrive in a dynamic economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
