'use client';

export default function EasyTipeHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <i className="ri-code-box-line text-purple-600 mr-2"></i>
            <span className="text-purple-800 font-semibold">Langage de programmation</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EasyTipe
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Un langage de programmation innovant que j'ai développé pour simplifier l'intégration de systèmes de typage dans les environnements no-code et semi-code. EasyTipe permet aux développeurs et aux créateurs d'automatisations d'ajouter facilement de la logique de validation et de typage à leurs projets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#demo" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Voir la démonstration
            </a>
            <a 
              href="https://github.com/easytipe" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-github-line mr-2"></i>
              Code source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}