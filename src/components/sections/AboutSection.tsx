'use client';

import Button from "../ui/button";

export default function AboutSection() {
  const handleBookConsultation = (): void => {
    const contactSection = document.getElementById('contact-section')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full py-[39px] sm:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1272px] mx-auto px-[3px] sm:px-[6px]">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-[15px] sm:gap-[30px] w-full">
            
            {/* Image Section */}
            <div className="w-full lg:w-[48%]">
              <img 
                src="/images/img_rectangle_3079.png" 
                alt="Business professionals in consultation"
                className="w-full h-[215px] sm:h-[430px] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            
            {/* Content Section */}
            <div className="w-full lg:flex-1 lg:-ml-[51px] sm:-ml-[102px] bg-background-main shadow-[0px_4px_30px_#eeeeee] rounded-md p-[14px] sm:p-[15px] flex flex-col justify-start items-start gap-[11px] sm:gap-[10px] relative z-10">
              
              {/* About Us Badge */}
              <div className="flex justify-center items-center gap-[3px] sm:gap-[6px] border border-border-primary rounded-3xl px-[3px] sm:px-[6px] py-[3px] sm:py-[6px] bg-background-main mt-[4px] sm:mt-[8px]">
                <div className="bg-primary-background rounded-xl p-[3px] sm:p-[6px] flex justify-center items-center">
                  <img 
                    src="/images/img_office.svg" 
                    alt=""
                    className="w-[9px] sm:w-[18px] h-[9px] sm:h-[18px]"
                  />
                </div>
                <p className="text-xs sm:text-[13px] font-lato font-medium leading-[14px] sm:leading-[16px] text-text-primary ml-[3px] sm:ml-[6px]">
                  About Us
                </p>
              </div>
              
              {/* Main Heading */}
              <div className="w-full lg:w-[480px] mt-[11px] sm:mt-[22px]">
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-lato font-bold leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[55px] text-left text-text-primary">
                  <span className="text-text-primary">The Core Mission </span>
                  <span className="text-text-primary">Behind <span className="text-[#F24E1E] font-medium">All Our Work</span></span>
                </h2>
              </div>
              
              {/* Description */}
              <div className="w-full mt-[6px] sm:mt-[12px]">
                <p className="text-[14px] sm:text-base font-lato font-normal leading-[17px] sm:leading-base text-left text-text-secondary">
                  To help organizations gain strategic clarity, make confident decisions, and 
                  achieve sustainable growth through insight-driven, practical advisory solutions.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="w-full mt-[10px] sm:mt-[20px]">
                <Button
                  text="Book Consultation"
                  text_font_size="text-sm"
                  text_font_family="Inter"
                  text_font_weight="font-bold"
                  text_line_height="leading-sm"
                  text_text_align="left"
                  text_color="text-button-text"
                  fill_background_color="bg-primary-background"
                  border_border_radius="rounded-md"
                  padding="t=12px,r=28px,b=12px,l=28px"
                  onClick={handleBookConsultation}
                  className="hover:scale-105 active:scale-95 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}