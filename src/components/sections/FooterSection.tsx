'use client';

import Button from "../ui/button";

export default function FooterSection() {
  const handleBookConsultation = (): void => {
    const contactSection = document.getElementById('contact-section')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-background-dark py-[16px] sm:py-[32px] mt-[59px] sm:mt-[118px]">
      <div className="flex flex-col justify-start items-center gap-[21px] sm:gap-[42px] w-full">
        
        {/* About Us Badge */}
        <div className="flex justify-center items-center gap-[3px] sm:gap-[6px] border border-border-primary rounded-3xl px-[3px] sm:px-[6px] py-[3px] sm:py-[6px] bg-background-main mt-[3px] sm:mt-[6px]">
          <div className="bg-primary-background rounded-full w-[16px] sm:w-[32px] h-[16px] sm:h-[32px]" />
          <p className="text-xs sm:text-[13px] font-lato font-medium leading-[14px] sm:leading-[16px] text-left text-text-primary">
            About Us
          </p>
        </div>
        
        {/* Company Mission */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-2xl font-lato font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-3xl text-center text-text-inverse max-w-2xl">
          Our Focus is on superiors <br />
          Value To Our Clients <br />
          Company
        </h2>
        
        {/* CTA Button */}
        <Button
          text="Book consultation"
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
        
        {/* Footer Bottom */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="w-full max-w-[1272px] mx-auto">
            <div className="flex flex-col justify-start items-center gap-[9px] sm:gap-[18px] w-full">
              
              {/* Separator Line */}
              <div className="w-full h-[0.5px] sm:h-[1px] bg-line-primary" />
              
              {/* Copyright */}
              <div className="flex justify-start items-center w-full">
                <img 
                  src="/images/img_copyright.svg" 
                  alt=""
                  className="w-[9px] sm:w-[18px] h-[9px] sm:h-[18px]"
                  loading="lazy"
                />
                <p className="text-[13px] sm:text-md font-lato font-normal leading-[16px] sm:leading-md text-center text-text-inverse ml-[4px] sm:ml-[8px]">
                  2026 Basiraview consulting ltd. All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}