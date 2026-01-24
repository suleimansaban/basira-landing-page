'use client';
import Header from '../layout/Header';

export default function ContactHeroSection() {
  return (
    <section className="w-full bg-[url('/images/img_rectangle_3073.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay */}
      <div className="w-full bg-background-overlay">
        <div className="flex flex-col justify-start items-center w-full">

          {/* Header */}
          <Header />

          {/* Hero Content Container */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full gap-[15px] sm:gap-[30px] py-[39px] sm:py-[78px]">

              {/* Breadcrumb */}
              <div className="flex justify-center items-center gap-[5px] sm:gap-[10px]">
                <p className="text-sm sm:text-base font-lato font-normal leading-[17px] sm:leading-lg text-text-inverse">
                  Home/About Us
                </p>
              </div>

              {/* Main Heading */}
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-lato font-black leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[56px] text-center text-text-inverse">
                  Get In touch With
                </h1>
                <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-lato font-black leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[56px] text-center text-accent-primary mt-[5px] sm:mt-[10px]">
                  Our Team
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
