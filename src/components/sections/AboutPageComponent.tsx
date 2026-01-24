'use client';
import { useState, useEffect } from 'react';
import AboutHeroSection from './AboutHeroSection';
import AboutContentSection from './AboutContentSection';
import StatisticsSection from './StatisticsSection';
import VisionMissionSection from './VisionMissionSection';
import CoreValuesSection from './CoreValuesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

interface StatisticData {
  id: number;
  value: string;
  title: string;
  description: string;
}

export default function AboutPageComponent() {
  const [statistics, setStatistics] = useState<StatisticData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async (): Promise<void> => {
    try {
      setTimeout(() => {
        setStatistics([
          { id: 1, value: '20+', title: 'Years In Business', description: 'A Decade of consulting experience' },
          { id: 2, value: '200+', title: 'Successful Project', description: 'Real world solution that achieved measurable reward' },
          { id: 3, value: '95%', title: 'Customer Retention', description: 'Our Clients Come back and that said everything' },
          { id: 4, value: '$10M', title: 'Revenue Impacted', description: 'We have helped business unlock millions in growth' }
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <AboutHeroSection />
        <AboutContentSection />
        <StatisticsSection statistics={statistics} loading={loading} />
        <VisionMissionSection />
        <CoreValuesSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
