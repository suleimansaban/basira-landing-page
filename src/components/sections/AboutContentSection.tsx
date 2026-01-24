'use client';

export default function AboutContentSection() {
  return (
    <section className="w-full py-[39px] sm:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1272px] mx-auto">
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
            <div className="w-full lg:flex-1 lg:-ml-[70px] bg-background-main shadow-[0px_4px_30px_#eeeeee] border border-border-primary rounded-xl p-[14px] sm:p-[28px] relative z-10">
              <div className="flex flex-col justify-start items-start gap-[11px] sm:gap-[22px]">

                {/* About Us Heading */}
                <div className="w-full">
                  <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-lato font-bold leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] text-left text-text-primary">
                    About <span className="text-accent-primary">Us</span>
                  </h2>
                </div>

                {/* Description */}
                <div className="w-full">
                  <p className="text-[13px] sm:text-[14px] font-lato font-normal leading-[19px] sm:leading-[21px] text-left text-text-secondary">
                    BasiraView Consulting Limited is a premier management and financial consulting firm
                    dedicated to driving sustainable growth and shaping industries. With over 20 years of collective
                    experience, we bring unparalleled strategic insight and practical solutions to organisations across
                    financial services, technology, real estate, FMCG, and manufacturing sectors.
                  </p>
                  <p className="text-[13px] sm:text-[14px] font-lato font-normal leading-[19px] sm:leading-[21px] text-left text-text-secondary mt-[11px] sm:mt-[22px]">
                    We specialize in helping businesses overcome complex challenges, unlock hidden potential, and
                    execute growth strategies with measurable impact. Our value proposition is rooted in actionable
                    insights, real-world practicality, and a deep commitment to creating lasting partnerships with our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
