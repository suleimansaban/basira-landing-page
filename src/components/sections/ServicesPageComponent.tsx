'use client';
import { useState, useEffect } from 'react';
import ServicesHeroSection from './ServicesHeroSection';
import ServicesListSection from './ServicesListSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
  reversed?: boolean;
}

export default function ServicesPageComponent() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async (): Promise<void> => {
    try {
      setTimeout(() => {
        setServices([
          {
            id: 1,
            title: 'Strategy & Business advisory',
            description: 'We help organizations create resilient strategies, informed decisions, and translate vision into actionable plans that drive sustainable growth.',
            icon: '/images/img_project.png',
            image: '/images/img_service1.png',
            items: [
              'Business Strategy Development',
              'Corporate Restructuring',
              'Performance Optimization',
              'Market Entry Planning',
              'Investment Appraisal'
            ],
            reversed: false
          },
          {
            id: 2,
            title: 'Microfinance & Financial Consulting',
            description: 'We support microfinance institutions and financial organizations with strategic guidance, operational improvement, and sustainable growth enablement.',
            icon: '/images/img_coins.png',
            image: '/images/img_service2.png',
            items: [
              'Regulatory Compliance',
              'Risk Management',
              'Loan Portfolio',
              'Quality Improvement',
              'Digital Transformation for Microfinance'
            ],
            reversed: true
          },
          {
            id: 3,
            title: 'Training & Capacity Building',
            description: 'We design and deliver practical training programs that strengthen leadership, build organizational capacity, and improve organizational performance',
            icon: '/images/img_training.png',
            image: '/images/img_service3.png',
            items: [
              'Governance and Board Training',
              'Management capacity development',
              'Financial literacy Programmes',
              'Staff  capacity development',
              'Board training'
            ],
            reversed: false
          },
          {
            id: 4,
            title: 'Legal, Governance & Compliance',
            description: 'We help organizations strengthen governance structures, manage risk, and maintain compliance through sound legal and regulatory adherence.',
            icon: '/images/img_scales.png',
            image: '/images/img_service4.png',
            items: [
              'Corporate governance advisory',
              'Compliance audit',
              'regulatory filings',
              'Legal risk assesment'
            ],
            reversed: true
          },
          {
            id: 5,
            title: 'Technology & Digital Advisory',
            description: 'We guide organizations in leveraging technology and digital solutions to improve efficiency, enhance decision-making, and support strategic growth.',
            icon: '/images/img_touchpad.png',
            image: '/images/img_service5.png',
            items: [
              'IT Systems evaluation',
              'Enterprise solutions',
              'Fintech advisory',
              'cybersecurity',
              'Emerging Technologies (AI,Blockchain)'
            ],
            reversed: false
          },
          {
            id: 6,
            title: 'Real Estate & Property Advisory',
            description: 'We provide strategic insight and advisory services that support informed real estate decisions, optimize property investments, and manage the effciently',
            icon: '/images/img_real_estate.png',
            image: '/images/img_service6.png',
            items: [
              'Property investment advisory',
              'project finance',
              'Facilities management solutions',
              'Asset management solutions'
            ],
            reversed: true
          }
        ]);
      }, 500);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  return (
    <>
      <main>
        <ServicesHeroSection />
        <ServicesListSection services={services} />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
