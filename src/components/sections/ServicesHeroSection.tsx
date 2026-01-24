'use client';
import Header from '../layout/Header';

export default function ServicesHeroSection() {
  return (
    <section className="w-full bg-[url('/images/img_rectangle_3073.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay */}
      <div className="w-full bg-background-overlay">
        <div className="flex flex-col justify-start items-center w-full">

          {/* Header */}
          <Header />

          {/* Hero Content Container */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-[15px] sm:gap-[30px] mt-[42px] sm:mt-[84px] pb-[42px] sm:pb-[84px]">

              {/* Breadcrumb */}
              <div className="w-full text-center">
                <p className="text-[13px] sm:text-[15px] font-lato font-normal leading-[16px] sm:leading-[18px] text-text-inverse">
                  Home&gt;Services
                </p>
              </div>

              {/* Main Heading */}
              <div className="w-full text-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-lato font-bold leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[64px] text-text-inverse">
                  Our Comprehensive
                </h1>
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-lato font-bold leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[64px] text-accent-primary mt-2">
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
