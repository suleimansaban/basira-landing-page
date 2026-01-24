import HomePage from '@/components/sections/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BasiraView Consulting - Strategic Business Solutions & Advisory Services',
  description: 'Transform your business with BasiraView Consulting. 20+ years of expertise delivering strategic guidance, practical solutions, and measurable growth across financial services, technology, and corporate sectors.',
  keywords: 'business consulting, strategic planning, financial advisory, technology consulting, business transformation, corporate strategy, microfinance consulting, digital transformation, governance advisory',
  
  openGraph: {
    title: 'BasiraView Consulting - Strategic Business Solutions & Advisory Services',
    description: 'Expert business consulting services with proven results. Get strategic guidance, practical solutions, and measurable impact for your organization with 20+ years of experience.',
  }
}

export default function Page() {
  return <HomePage />
}