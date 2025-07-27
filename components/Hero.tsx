'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20futuristic%20digital%20workspace%20with%20Discord%20bot%20development%20environment%2C%20dark%20theme%20with%20purple%20and%20blue%20neon%20lights%2C%20multiple%20monitors%20displaying%20code%20and%20Discord%20interfaces%2C%20cyberpunk%20aesthetic%2C%20high-tech%20atmosphere%2C%20professional%20developer%20setup%20with%20gaming%20elements%2C%20sleek%20modern%20design&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Développeur de 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Bots Discord</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Créateur de bots Discord personnalisés pour transformer votre serveur en une communauté dynamique et engageante. Solutions professionnelles avec support complet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tarifs" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap">
                Voir les tarifs
              </Link>
              <Link href="#portfolio" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center whitespace-nowrap">
                Mes réalisations
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Discord%20bot%20developer%20workspace%20showing%20multiple%20screens%20with%20Discord%20interface%2C%20bot%20code%2C%20server%20management%20panels%2C%20modern%20dark%20theme%20setup%20with%20purple%20and%20blue%20lighting%2C%20futuristic%20tech%20environment%2C%20high%20quality%20professional%20photography&width=600&height=400&seq=hero-img-001&orientation=landscape"
              alt="Espace de développement"
              className="relative rounded-lg shadow-2xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}