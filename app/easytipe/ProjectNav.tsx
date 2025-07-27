'use client';

import Link from 'next/link';

export default function ProjectNav() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-arrow-left-line text-gray-600 text-xl"></i>
            </div>
            <span className="text-gray-700 font-medium">Retour au portfolio</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="#overview" className="text-gray-600 hover:text-purple-600 transition-colors">
              Aperçu
            </Link>
            <Link href="#demo" className="text-gray-600 hover:text-purple-600 transition-colors">
              Démonstration
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-purple-600 transition-colors">
              Expérience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}