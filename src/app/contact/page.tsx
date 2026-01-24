import type { Metadata } from "next";
import ContactPageComponent from '@/components/sections/ContactPageComponent';

export const metadata: Metadata = {
  title: "Contact Us - BasiraView Consulting | Get In Touch With Our Team",
  description: "Contact BasiraView Consulting Limited for expert business advisory services. Reach out to our team for strategic consulting, financial solutions, and business growth support.",
  keywords: 'contact basiraview, consulting contact, business advisory contact, get in touch, consultation booking, contact information, office address, phone number, email contact',

  openGraph: {
    title: 'Contact Us - BasiraView Consulting | Get In Touch With Our Team',
    description: 'Get in touch with BasiraView Consulting for expert business solutions. Contact us for strategy, finance, technology, and real estate consulting services.',
  }
};

export default function ContactPage() {
  return <ContactPageComponent />;
}
