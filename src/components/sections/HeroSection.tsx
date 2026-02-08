'use client';
import Header from '../layout/Header';
import RatingBar from '../ui/RatingBar';
import { Avatar, AvatarImage } from '../ui/avatar';

interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const handleBookConsultation = (): void => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If contact section doesn't exist, navigate to home and then scroll
      window.location.href = '/#contact-section'
    }
  }

  return (
    <section className="w-full bg-[url('/images/img_rectangle_3073.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      {/* Background Overlay */}
      <div className="w-full bg-background-overlay min-h-screen">
        <div className="flex flex-col justify-start items-center w-full">
          
          {/* Header */}
          <Header />
          
          {/* Hero Content Container */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center w-full gap-8 sm:gap-12 mt-12 sm:mt-20 pb-12">
              
              {/* Client Satisfaction Section with Avatars */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Three Overlapping Avatars */}
                <div className="flex items-center -space-x-2 sm:-space-x-3">
                  <Avatar className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-text-inverse z-10">
                    <AvatarImage src="/images/img_ellipse_71.png" alt="Client" />
                  </Avatar>
                  <Avatar className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-text-inverse z-20">
                    <AvatarImage src="/images/img_ellipse_72.png" alt="Client" />
                  </Avatar>
                  <Avatar className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-text-inverse z-30">
                    <AvatarImage src="/images/img_ellipse_73.png" alt="Client" />
                  </Avatar>
                </div>
                
                {/* Client Rating */}
                <div className="flex flex-col justify-start items-start gap-1 sm:gap-2">
                  <p className="text-sm sm:text-base font-lato font-normal leading-4 sm:leading-5 text-text-inverse whitespace-nowrap">
                    1k+ Client Satisfaction
                  </p>
                  <RatingBar 
                    value={5} 
                    readonly={true} 
                    size="small"
                    starColor="#FFD700"
                    className="justify-start"
                  />
                </div>
              </div>
              
              {/* Main Headline */}
              <div className="flex flex-col justify-center items-center w-full mt-4 sm:mt-8 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lato font-black leading-tight text-center text-text-inverse max-w-4xl">
                  <span className="text-text-inverse">See Your Business Clearly. Grow </span>
                  <span className="text-text-inverse">Strategically. </span>
                  <span className="text-accent-primary">Execute Confidently.</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="flex justify-center items-center w-full mt-4 sm:mt-6 px-4">
                <p className="text-base sm:text-lg md:text-xl font-lato font-normal leading-6 sm:leading-7 text-center text-text-inverse max-w-3xl">
                  Strategic consulting that gives organizations clarity, direction, and measurable 
                  growth through insight, focus, and disciplined execution.
                </p>
              </div>
              
              {/* Book Consultation Button */}
              <div className="flex justify-center items-center w-full mt-8 sm:mt-12 px-4">
                <button
                  onClick={handleBookConsultation}
                  className="bg-white w-[183px] h-[41px] sm:w-auto sm:h-auto sm:px-12 sm:py-5 rounded-[20px] shadow-lg text-primary-background text-base sm:text-lg font-lato font-bold hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-offset-2"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}