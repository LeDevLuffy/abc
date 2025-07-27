'use client';

import Link from 'next/link';

export default function AboutHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Young%20passionate%20programmer%20developer%20working%20on%20multiple%20projects%2C%20modern%20workspace%20with%20coding%20setup%2C%20programming%20languages%20symbols%20floating%20around%2C%20creative%20tech%20environment%2C%20inspirational%20coding%20atmosphere%2C%20purple%20and%20blue%20neon%20lighting%2C%20futuristic%20developer%20portrait&width=1920&height=1080&seq=about-hero-bg-001&orientation=landscape')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300">
                <i className="ri-arrow-left-line mr-2"></i>
                Retour au portfolio
              </Link>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Salut, je suis 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> LuffyDev</span>
            </h1>
            
            <div className="text-2xl mb-8 text-purple-300 font-semibold">
              19 ans • Développeur passionné
            </div>
            
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Je développe des bots Discord mais je suis surtout fier de mon projet EasyTipe, 
              un langage de programmation simple inspiré du Python. 
              Découvrez mon parcours et mes créations !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/easytipe" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap">
                Découvrir EasyTipe
              </Link>
              <Link href="#parcours" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center whitespace-nowrap">
                Mon parcours
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 animate-pulse"></div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20creative%20programmer%20developer%20portrait%2C%2019%20years%20old%2C%20confident%20and%20passionate%20about%20coding%2C%20modern%20tech%20workspace%20background%2C%20programming%20languages%20and%20code%20symbols%2C%20inspiring%20developer%20lifestyle%2C%20professional%20yet%20approachable%2C%20purple%20and%20blue%20tech%20lighting&width=500&height=500&seq=about-portrait-001&orientation=squarish"
                alt="LuffyDev Portrait"
                className="relative rounded-full shadow-2xl object-cover w-96 h-96 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}