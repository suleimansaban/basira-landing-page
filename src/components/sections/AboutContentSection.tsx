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
            <div className="w-full lg:flex-1 border border-border-primary rounded-xl p-[20px] sm:p-[40px]">
              <div className="flex flex-col justify-start items-start gap-[15px] sm:gap-[30px]">

                {/* About Us Heading */}
                <div className="w-full">
                  <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-left text-text-primary">
                    About <span className="text-accent-primary">Us</span>
                  </h2>
                </div>

                {/* Description */}
                <div className="w-full">
                  <p className="text-[14px] sm:text-base font-lato font-normal leading-[21px] sm:leading-[24px] text-left text-text-secondary">
                    BasiraView Consulting Limited is a premier management and financial consulting firm
                    dedicated to driving sustainable growth and shaping industries. With over 20 years of collective
                    experience, we bring unparalleled strategic insight and practical solutions to organisations across
                    financial services, technology, real estate, FMCG, and manufacturing sectors.
                  </p>
                  <p className="text-[14px] sm:text-base font-lato font-normal leading-[21px] sm:leading-[24px] text-left text-text-secondary mt-4">
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
