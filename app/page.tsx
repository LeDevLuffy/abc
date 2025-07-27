'use client';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
    </main>
  );
}