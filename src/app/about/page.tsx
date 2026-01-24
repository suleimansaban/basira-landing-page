import type { Metadata } from "next";
import AboutPageComponent from '@/components/sections/AboutPageComponent';

export const metadata: Metadata = {
  title: "About Us - BasiraView Consulting | Empowering Organizations, Shaping Industries",
  description: "Learn about BasiraView Consulting Limited - A premier management and financial consulting firm with 20+ years of experience. Discover our vision, mission, and core values driving strategic growth across industries.",
  keywords: 'about basiraview, consulting firm, business advisory, financial consulting, strategic planning, our vision, our mission, core values, consulting experience',

  openGraph: {
    title: 'About Us - BasiraView Consulting | Empowering Organizations, Shaping Industries',
    description: 'BasiraView Consulting Limited - Premier management and financial consulting firm dedicated to driving sustainable growth and shaping industries with 20+ years of experience.',
  }
};

export default function AboutPage() {
  return <AboutPageComponent />;
}
