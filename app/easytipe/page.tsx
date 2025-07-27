'use client';

import Link from 'next/link';
import EasyTipeHero from './EasyTipeHero';
import ProjectOverview from './ProjectOverview';
import TechnicalDemo from './TechnicalDemo';
import LessonsLearned from './LessonsLearned';
import ProjectNav from './ProjectNav';

export default function EasyTipePage() {
  return (
    <main className="min-h-screen bg-white">
      <ProjectNav />
      <EasyTipeHero />
      <ProjectOverview />
      <TechnicalDemo />
      <LessonsLearned />
    </main>
  );
}