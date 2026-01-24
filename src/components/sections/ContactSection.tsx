'use client';
import { useState } from 'react';
import EditText from '../ui/EditText';
import Button from '../ui/button';


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleInputChange = (field: keyof ContactFormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (): Promise<void> => {
    if (isSubmitting) return

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-section" className="w-full py-[57px] sm:py-[114px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="w-full max-w-[1272px] mx-auto">
          <div className="flex flex-col justify-start items-center gap-[55px] sm:gap-[110px] w-full">
            
            {/* Section Header */}
            <div className="flex flex-col justify-start items-center gap-[9px] sm:gap-[18px] w-full sm:flex-1 mx-[139px] sm:mx-[278px]">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-3xl font-lato font-black leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-4xl text-center text-text-primary">
                <span className="text-text-primary">Get In Touch, </span>
                <span className="text-accent-primary">Today</span>
              </h2>
              <p className="text-[13px] sm:text-md font-lato font-normal leading-[16px] sm:leading-md text-center text-text-secondary">
                Great transformation begin with the right partnership. We are always ready to listen, engage and collaborate
                with organizations that want to unlock potential, build resilence, and achieve measurable success
              </p>
            </div>
            
            {/* Contact Form and Info */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-[15px] sm:gap-[30px] w-full ml-[4px] sm:ml-[8px]">
              
              {/* Contact Form */}
              <div className="bg-background-tertiary rounded-lg p-[17px] sm:p-[34px] flex flex-col justify-start items-start w-full lg:flex-1 min-h-[432px] sm:min-h-[864px]">
                
                {/* Name Field */}
                <div className="flex flex-col justify-start items-start w-full">
                  <h3 className="text-[16px] sm:text-lg font-lato font-black leading-[20px] sm:leading-xl text-center text-text-primary mt-[16px] sm:mt-[32px]">
                    Name
                  </h3>
                  <div className="w-full mt-[16px] sm:mt-[32px] mr-[5px] sm:mr-[10px]">
                    <EditText
                      fill_background_color="bg-input-background"
                      border_border="1 solid #e6e6e6"
                      border_border_radius="rounded-md"
                      padding="t=12px,r=12px,b=12px,l=12px"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="flex flex-col justify-start items-start gap-[16px] sm:gap-[32px] w-full mt-[28px] sm:mt-[56px] mr-[5px] sm:mr-[10px]">
                  <h3 className="text-[16px] sm:text-lg font-lato font-black leading-[20px] sm:leading-xl text-left text-text-primary">
                    Email
                  </h3>
                  <EditText
                    type="email"
                    fill_background_color="bg-input-background"
                    border_border="1 solid #e6e6e6"
                    border_border_radius="rounded-md"
                    padding="t=12px,r=12px,b=12px,l=12px"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                
                {/* Message Field */}
                <div className="flex flex-col justify-start items-start gap-[15px] sm:gap-[30px] w-full mt-[29px] sm:mt-[58px] mr-[5px] sm:mr-[10px]">
                  <h3 className="text-[16px] sm:text-lg font-lato font-black leading-[20px] sm:leading-xl text-left text-text-primary">
                    Message
                  </h3>
                  <div className="bg-input-background border border-input-border rounded-md w-full h-[103px] sm:h-[206px] p-[12px] focus-within:ring-2 focus-within:ring-primary-background transition-all duration-200">
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Enter your message"
                      className="w-full h-full resize-none border-none outline-none bg-transparent text-text-primary placeholder-text-secondary"
                      rows={6}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="w-full mt-[20px] sm:mt-[40px] mr-[5px] sm:mr-[10px]">
                  <Button
                    text={isSubmitting ? "Sending..." : "Send Message"}
                    text_font_size="text-sm"
                    text_font_family="Inter"
                    text_font_weight="font-bold"
                    text_line_height="leading-sm"
                    text_text_align="left"
                    text_color="text-button-text"
                    fill_background_color="bg-primary-background"
                    border_border_radius="rounded-md"
                    padding="t=26px,r=34px,b=26px,l=34px"
                    layout_width="100%"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="hover:scale-105 active:scale-95 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-background-tertiary rounded-lg p-[39px] sm:p-[78px] pr-[28px] sm:pr-[56px] pb-[39px] sm:pb-[78px] pl-[28px] sm:pl-[56px] flex flex-col justify-center items-center w-full lg:w-[46%] min-h-[432px] sm:min-h-[864px]">
                
                {/* Phone Contact */}
                <div className="flex justify-start items-center w-full mr-[3px] sm:mr-[6px] ml-[3px] sm:ml-[6px]">
                  <div className="flex flex-col justify-start items-end w-[54%]">
                    <div className="flex justify-start items-center w-full">
                      <img 
                        src="/images/img_vector.svg" 
                        alt=""
                        className="w-[18px] sm:w-[36px] h-[18px] sm:h-[36px]"
                        loading="lazy"
                      />
                      <h3 className="text-[22px] sm:text-xl font-lato font-black leading-[26px] sm:leading-2xl text-left text-text-primary ml-[12px] sm:ml-[24px]">
                        Phone
                      </h3>
                    </div>
                    <p className="text-[16px] sm:text-lg font-lato font-medium leading-[20px] sm:leading-xl text-left text-text-primary mt-[6px] sm:mt-[12px]">
                      +234 913 333 3326
                    </p>
                    <p className="text-[16px] sm:text-lg font-lato font-medium leading-[20px] sm:leading-xl text-left text-text-primary mt-[12px] sm:mt-[24px]">
                      +234 805 437 7701
                    </p>
                  </div>
                </div>
                
                {/* Email Contact */}
                <div className="flex justify-start items-start gap-[9px] sm:gap-[18px] w-full mt-[89px] sm:mt-[178px]">
                  <img 
                    src="/images/img_mail_01.svg" 
                    alt=""
                    className="w-[25px] sm:w-[50px] h-[25px] sm:h-[50px]"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-start items-start gap-[9px] sm:gap-[18px] w-full">
                    <h3 className="text-[22px] sm:text-xl font-lato font-black leading-[26px] sm:leading-2xl text-left text-text-primary">
                      Email Contact
                    </h3>
                    <p className="text-[16px] sm:text-lg font-lato font-medium leading-[20px] sm:leading-xl text-left text-text-primary">
                      basiraviewconsultinglimited@gmail.com
                    </p>
                  </div>
                </div>
                
                {/* Office Address */}
                <div className="flex justify-start items-center w-full mt-[81px] sm:mt-[162px]">
                  <img 
                    src="/images/img_location_01.svg" 
                    alt=""
                    className="w-[25px] sm:w-[50px] h-[25px] sm:h-[50px]"
                    loading="lazy"
                  />
                  <h3 className="text-[22px] sm:text-xl font-lato font-black leading-[26px] sm:leading-2xl text-left text-text-primary ml-[9px] sm:ml-[18px]">
                    Office Address
                  </h3>
                </div>
                <p className="text-[16px] sm:text-lg font-lato font-medium leading-[15px] sm:leading-base text-left text-text-primary mt-[8px] sm:mt-[16px] mb-[14px] sm:mb-[28px] w-full">
                  Suite D70,EFAB MALL, Area 11,Garki<br />Abuja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}