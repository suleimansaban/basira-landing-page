import type { Metadata } from "next";
import ServicesPageComponent from '@/components/sections/ServicesPageComponent';

export const metadata: Metadata = {
  title: "Our Services - BasiraView Consulting | Comprehensive Business Solutions",
  description: "Explore BasiraView Consulting's comprehensive services: Strategy & Business Advisory, Microfinance & Financial Consulting, Training & Capacity Building, Legal Governance, Technology Advisory, and Real Estate Solutions.",
  keywords: 'business consulting services, strategy advisory, microfinance consulting, training programs, legal compliance, technology advisory, real estate advisory, capacity building, governance consulting',

  openGraph: {
    title: 'Our Services - BasiraView Consulting | Comprehensive Business Solutions',
    description: 'Professional consulting services across strategy, finance, technology, legal, and real estate. Tailored solutions for sustainable business growth.',
  }
};

export default function ServicesPage() {
  return <ServicesPageComponent />;
}
