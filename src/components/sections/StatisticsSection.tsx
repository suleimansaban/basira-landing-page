'use client';
interface StatisticData {
  id: number;
  value: string;
  title: string;
  description: string;
}

interface StatisticsSectionProps {
  statistics: StatisticData[];
  loading: boolean;
}

export default function StatisticsSection({ statistics, loading }: StatisticsSectionProps) {
  return (
    <section className="w-full py-[17px] sm:py-[34px]">
      <div className="w-full max-w-[1440px] mx-auto px-[47px] sm:px-[94px] pr-[28px] sm:pr-[56px]">
        <div className="flex flex-col sm:flex-row justify-start items-center gap-[29px] sm:gap-[58px] md:gap-[116px] w-full">
          
          {loading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center gap-[29px] sm:gap-[58px] w-full sm:w-auto">
                <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full sm:w-[118px]">
                  <div className="animate-pulse bg-background-light rounded h-[29px] sm:h-[58px] w-full" />
                  <div className="flex flex-col justify-start items-start gap-[3px] sm:gap-[6px] w-full">
                    <div className="animate-pulse bg-background-light rounded h-[12px] sm:h-[24px] w-3/4" />
                    <div className="animate-pulse bg-background-light rounded h-[17px] sm:h-[34px] w-full" />
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block w-[1px] sm:w-[2px] h-[32px] sm:h-[64px] bg-border-primary" />
                )}
              </div>
            ))
          ) : (
            // Actual statistics
            statistics.map((stat, index) => (
              <div key={stat.id} className="flex items-center gap-[29px] sm:gap-[58px] w-full sm:w-auto">
                <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full sm:w-[118px] mb-[3px] sm:mb-[6px]">
                  
                  {/* Statistics Value */}
                  <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-lato font-bold leading-[29px] sm:leading-[58px] text-left text-text-accent">
                    {stat.value}
                  </h3>
                  
                  {/* Statistics Details */}
                  <div className="flex flex-col justify-start items-start gap-[3px] sm:gap-[6px] w-full">
                    <h4 className="text-[16px] sm:text-lg font-lato font-semibold leading-[20px] sm:leading-xl text-left text-text-primary">
                      {stat.title}
                    </h4>
                    <p className="text-[12px] sm:text-base font-lato font-normal leading-[15px] sm:leading-base text-left text-text-secondary">
                      {stat.description}
                    </p>
                  </div>
                </div>
                
                {/* Vertical separator line */}
                {index < statistics.length - 1 && (
                  <div className="hidden sm:block w-[1px] sm:w-[2px] h-[32px] sm:h-[64px] bg-border-primary" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}