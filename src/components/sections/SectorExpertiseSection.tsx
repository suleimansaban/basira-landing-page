'use client';
interface Sector {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SectorExpertiseSectionProps {
  sectors: Sector[];
  loading: boolean;
}

export default function SectorExpertiseSection({ sectors, loading }: SectorExpertiseSectionProps) {
  const getSectorBackgroundColor = (index: number): string => {
    const colors = [
      'bg-primary-medium',    // Financial Institution
      'bg-background-light',  // FMCG
      'bg-background-light',  // Real Estate
      'bg-background-light',  // Manufacturing
      'bg-background-light',  // SMEs & Family-Owned
      'bg-background-light'   // Information Technology
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="w-full py-[39px] sm:py-[78px]">
      <div className="flex flex-col justify-start items-center gap-[36px] sm:gap-[72px] w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col justify-start items-center gap-[5px] sm:gap-[10px] w-full sm:w-[48%]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-center text-text-primary">
            <span className="text-text-primary">Who We Serve: Sector </span>
            <span className="text-accent-primary">Expertise</span>
          </h2>
          <p className="text-[13px] sm:text-md font-lato font-normal leading-[16px] sm:leading-md text-center text-text-secondary mt-[9px] sm:mt-[18px]">
            Our integrated services are designed to help organizations overcome todays challenges while 
            preparing for the opportunities of tomorrow, supporting financial institutions, corporates and public sector organiziation in achieveing resilience and lasting impacts.
          </p>
        </div>
        
        {/* Sectors Grid */}
        <div className="w-full max-w-[1272px] mx-auto">
          {loading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-background-secondary rounded-md p-[9px] sm:p-[18px] flex flex-col justify-start items-start gap-[13px] sm:gap-[26px] min-h-[200px] sm:min-h-[400px]">
                  <div className="animate-pulse bg-background-light rounded-md w-[41px] sm:w-[82px] h-[37px] sm:h-[74px]" />
                  <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                    <div className="animate-pulse bg-background-light rounded h-[12px] sm:h-[24px] w-3/4" />
                    <div className="animate-pulse bg-background-light rounded h-[48px] sm:h-[96px] w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Actual sectors
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {sectors.map((sector, index) => (
                <div key={sector.id} className="bg-background-secondary rounded-md p-[9px] sm:p-[18px] flex flex-col justify-start items-start gap-[13px] sm:gap-[26px] min-h-[200px] sm:min-h-[400px] hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
                  
                  {/* Sector Icon */}
                  <div className={`${getSectorBackgroundColor(index)} rounded-md p-[6px] sm:p-[12px] flex justify-center items-center w-[41px] sm:w-[82px] h-[37px] sm:h-[74px]`}>
                    <img 
                      src={sector.icon} 
                      alt={sector.title}
                      className="w-[25px] sm:w-[50px] h-[24px] sm:h-[48px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Sector Content */}
                  <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                    <h3 className="text-[16px] sm:text-lg font-lato font-bold leading-[20px] sm:leading-xl text-left text-text-primary">
                      {sector.title}
                    </h3>
                    <p className="text-[12px] sm:text-base font-lato font-normal leading-[15px] sm:leading-base text-left text-text-secondary mb-[12px] sm:mb-[21px] lg:mb-[42px]">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}