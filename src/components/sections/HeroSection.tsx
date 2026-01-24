'use client';
import { useState } from 'react';
import Header from '../layout/Header';
import RatingBar from '../ui/RatingBar';


interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [selectedTab, setSelectedTab] = useState<string>('Core Values')

  const handleBookConsultation = (): void => {
    // Navigate to contact section or open consultation form
    const contactSection = document.getElementById('contact-section')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const tabs = [
    { id: 'core-values', label: 'Core Values' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'team', label: 'Our Team' }
  ]

  const handleTabClick = (tabLabel: string): void => {
    setSelectedTab(tabLabel)
  }

  return (
    <section className="w-full bg-[url('/images/img_rectangle_3073.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay */}
      <div className="w-full bg-background-overlay">
        <div className="flex flex-col justify-start items-center w-full">
          
          {/* Header */}
          <Header />
          
          {/* Hero Content Container */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-[42px] sm:gap-[84px] mt-[42px] sm:mt-[84px] pb-[42px]">
              
              {/* Logo and Rating Section */}
              <div className="flex flex-col justify-start items-center w-full max-w-[1272px]">
                <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto gap-[5px] sm:gap-[10px]">
                  
                  {/* Company Logo */}
                  <div className="flex justify-center items-center w-full sm:w-auto">
                    <img 
                      src="/images/img_group_306.png" 
                      alt="BasiraView Consulting Logo"
                      className="w-[59px] sm:w-[118px] h-[25px] sm:h-[50px]"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Client Rating */}
                  <div className="flex flex-col justify-start items-center sm:items-start gap-[3px] sm:gap-[6px] mb-[2px] sm:mb-[4px]">
                    <p className="text-xs sm:text-[13px] font-lato font-normal leading-[8px] sm:leading-[16px] text-center text-text-inverse">
                      1k+ Client Satisfaction
                    </p>
                    <RatingBar 
                      value={5} 
                      readonly={true} 
                      size="small"
                      starColor="#fa4e09"
                      className="justify-center sm:justify-start"
                    />
                  </div>
                </div>
                
                {/* Main Headline */}
                <div className="flex flex-col justify-center items-center w-full mt-[23px] sm:mt-[46px]">
                  <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-lato font-black leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[55px] text-center text-text-inverse max-w-4xl">
                    <span className="text-text-inverse">See Your Business Clearly. Grow </span>
                    <span className="text-text-inverse">Strategically. </span>
                    <span className="text-accent-primary">Execute Confidently.</span>
                  </h1>
                </div>
                
                {/* Subtitle */}
                <div className="flex justify-center items-center w-full mt-[9px] sm:mt-[18px]">
                  <p className="text-[16px] sm:text-[20px] font-lato font-normal leading-[20px] sm:leading-[24px] text-center text-text-inverse max-w-3xl">
                    Strategic consulting that gives organizations clarity, direction, and measurable 
                    growth through insight, focus, and disciplined execution.
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center items-center mt-[16px] sm:mt-[32px]">
                  <div className="bg-background-main rounded-2xl px-[6px] sm:px-[12px] py-[3px] sm:py-[6px] flex items-center gap-[12px] sm:gap-[24px] hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={handleBookConsultation}>
                    <p className="text-xs sm:text-sm font-inter font-bold leading-[14px] sm:leading-[17px] text-text-link ml-[5px] sm:ml-[10px]">
                      Book Consultation
                    </p>
                    <div className="bg-primary-background rounded-2xl p-[3px] sm:p-[6px] flex justify-center items-center">
                      <img 
                        src="/images/img_right_arrow.png" 
                        alt="Arrow"
                        className="w-[17px] sm:w-[34px] h-[17px] sm:h-[34px]"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Navigation Tabs */}
                <div className="w-full flex justify-center items-center mt-[33px] sm:mt-[66px] mb-[10px] sm:mb-[20px]">
                  <div className="bg-secondary-light shadow-[0px_4px_25px_#888888ff] rounded-none px-[28px] sm:px-[56px] py-0 flex flex-wrap justify-center items-center gap-[15px] sm:gap-[30px] w-full max-w-5xl">
                    {tabs.map((tab, index) => (
                      <div key={tab.id} className="flex items-center gap-[15px] sm:gap-[30px] py-[10px] sm:py-[20px]">
                        <button
                          onClick={() => handleTabClick(tab.label)}
                          className="flex items-center gap-[6px] sm:gap-[12px] px-[3px] sm:px-[6px] hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background rounded-md"
                          role="tab"
                          aria-selected={selectedTab === tab.label}
                        >
                          <p className={`text-[14px] sm:text-base font-lato font-bold leading-[18px] sm:leading-lg ${
                            selectedTab === tab.label ? 'text-text-inverse' : 'text-text-inverse'
                          }`}>
                            {tab.label}
                          </p>
                          <img 
                            src="/images/img_right_arrow.png" 
                            alt=""
                            className="w-[17px] sm:w-[34px] h-[17px] sm:h-[34px]"
                          />
                        </button>
                        
                        {/* Vertical separator line */}
                        {index < tabs.length - 1 && (
                          <div className="hidden sm:block w-[1px] sm:w-[2px] h-[27px] sm:h-[54px] bg-text-inverse opacity-30" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}