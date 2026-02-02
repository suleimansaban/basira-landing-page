'use client';
import Header from '../layout/Header';

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-[url('/images/img_rectangle_3073.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full bg-background-overlay">
        <div className="flex flex-col justify-start items-center w-full">

          <Header />

          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-[15px] sm:gap-[30px] mt-[42px] sm:mt-[84px] pb-[42px] sm:pb-[84px]">

              {/* Badge */}
              <div className="flex justify-center items-center gap-[3px] sm:gap-[6px] border border-border-primary rounded-3xl px-[3px] sm:px-[6px] py-[3px] sm:py-[6px] bg-background-main">
                <div className="bg-primary-background rounded-xl p-[3px] sm:p-[6px] flex justify-center items-center">
                  <img
                    src="/images/img_office.svg"
                    alt=""
                    className="w-[9px] sm:w-[18px] h-[9px] sm:h-[18px]"
                  />
                </div>
                <p className="text-xs sm:text-[13px] font-lato font-medium leading-[14px] sm:leading-[16px] text-text-inverse ml-[3px] sm:ml-[6px]">
                  Hello! About Us
                </p>
              </div>

              {/* Main Heading */}
              <div className="w-full text-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-lato font-bold leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[64px] text-text-inverse">
                  Empowering Organization,
                </h1>
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-lato font-bold leading-[38px] sm:leading-[46px] md:leading-[54px] lg:leading-[64px] text-accent-primary mt-2">
                  Shaping Industries
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
