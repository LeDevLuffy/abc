
'use client';

export default function Portfolio() {
  const projects = [
    {
      title: "Nexora Bot",
      description: "Bot Discord public communautaire avec modération avancée, système de publicité et giveaways automatisés",
      features: ["Bot communautaire", "Modération automatique", "Système de pub (bientôt)", "Giveaways automatisés"],
      image: "https://static.readdy.ai/image/d08f120cefe85d61523557602385727b/c35f423774fda06eb706afc6a32f4de9.png",
      status: "Public",
      isPublic: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ma Réalisation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez Nexora, mon bot Discord public conçu pour les communautés
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                      Inviter le bot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Nexora en développement</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nexora évolue constamment avec de nouvelles fonctionnalités. Le système de publicité arrive bientôt pour permettre aux serveurs de se faire connaître !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}