'use client';
import { useState, useEffect } from 'react';
 import HeroSection from'./HeroSection';
 import AboutSection from'./AboutSection';
 import StatisticsSection from'./StatisticsSection';
 import ServicesSection from'./ServicesSection';
 import CoreValuesSection from'./CoreValuesSection';
 import TestimonialsSection from'./TestimonialsSection';
 import ContactSection from'./ContactSection';
 import FooterSection from'./FooterSection';
import ProcessSection from './ProsessingSection';
import SectorExpertiseSection from './SectorExpertiseSection';

interface StatisticData {
  id: number;
  value: string;
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Sector {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function HomePage() {
  const [statistics, setStatistics] = useState<StatisticData[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [sectors, setSectors] = useState<Sector[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadHomeData()
  }, [])

  const loadHomeData = async (): Promise<void> => {
    try {
      setTimeout(() => {
        setStatistics([
          { id: 1, value: '20+', title: 'Years In Business', description: 'A Decade of consulting experience' },
          { id: 2, value: '200+', title: 'Successful Project', description: 'Real world solution that achieved measurable reward' },
          { id: 3, value: '95%', title: 'Customer Retention', description: 'Our Clients Come back and that said everything' },
          { id: 4, value: '$10M', title: 'Revenue Impacted', description: 'We have helped business unlock millions in growth' }
        ])
        
        setServices([
          { id: 1, title: 'Strategy & Business advisory', description: 'Business strategy development, corporate restructuring, performance optimisation, market entry planning, investment appraisals', icon: '/images/img_project.png' },
          { id: 2, title: 'Microfinance & Financial Consulting', description: 'Regulatory compliance, risk management framework, loan portfolio quality improvement, digital transformation for microfinance', icon: '/images/img_coins.png' },
          { id: 3, title: 'Training & Capacity Building', description: 'Governance and board training, management and staff capacity development, financial literacy programmers', icon: '/images/img_training.png' },
          { id: 4, title: 'Legal, Governance & Compliance', description: 'Corporate governance advisory, compliance audit, regulatory filings, legal risk assessment', icon: '/images/img_scales.png' },
          { id: 5, title: 'Technology & Digital Advisory', description: 'IT Systems evaluation, enterprise solutions (ERP, CRM), fintech advisory, cybersecurity, and emerging technologies (AI,Blockchain)', icon: '/images/img_touchpad.png' },
          { id: 6, title: 'Real Estate & Property Advisory', description: 'Property investment advisory, project finance, facilities and asset management solutions', icon: '/images/img_real_estate.png' }
        ])

        setSectors([
          { id: 1, title: 'Financial Institution', description: 'Banks, Microfinance institutions and investment firms requiring strategic guidance, risk management and regulatory compliance support', icon: '/images/img_escrow_process.png' },
          { id: 2, title: 'Fast Moving Consumer Goods (FMCG)', description: 'Strengthening operational effficiency, distribution networks and market competitiveness', icon: '/images/img_fast_forward.png' },
          { id: 3, title: 'Real Estate Enterprises', description: 'Supporting strategic planning, property management and asset maximisation', icon: '/images/img_inland.png' },
          { id: 4, title: 'Manufacturing & Production Co.', description: 'Enhancing production processes, operational scalability and market reach.', icon: '/images/img_deployment.png' },
          { id: 5, title: 'SMEs & Family-Owned Enterprises', description: 'Guiding businesses through transition into structured growth-oriented organization', icon: '/images/img_company.png' },
          { id: 6, title: 'Information Technology (IT)', description: 'Delivering digital transformation, IT strategy and innovative solutions to maximize business performance', icon: '/images/img_imac_settings.png' }
        ])
        
        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <main>
        <HeroSection loading={loading} />
        <AboutSection />
        <StatisticsSection statistics={statistics} loading={loading} />
        <ProcessSection />
        <ServicesSection services={services} loading={loading} />
        <CoreValuesSection />
        <SectorExpertiseSection sectors={sectors} loading={loading} />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}