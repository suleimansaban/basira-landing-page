import React from 'react';
import './index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'BasiraView Consulting',
    template: 'BasiraView Consulting | %s',
  },
  description: 'Transform your business with BasiraView Consulting. 20+ years of expertise in strategic consulting, financial advisory, and technology solutions. 200+ successful projects delivered.',
  keywords: 'business consulting, strategic planning, financial advisory, technology consulting, business transformation, corporate strategy',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'BasiraView Consulting',
      template: 'BasiraView Consulting | %s',
    },
    description: 'Expert business consulting services with proven results. Get strategic guidance, practical solutions, and measurable impact for your organization.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbasiraview1750back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.15" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}