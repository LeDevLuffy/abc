'use client';

import Link from 'next/link';
import AboutHero from './AboutHero';
import AboutSkills from './AboutSkills';
import AboutJourney from './AboutJourney';
import AboutContact from './AboutContact';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutSkills />
      <AboutJourney />
      <AboutContact />
    </main>
  );
}