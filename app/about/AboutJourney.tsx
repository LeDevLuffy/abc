'use client';

export default function AboutJourney() {
  const journey = [
    {
      year: "2023",
      title: "Début dans le développement Discord",
      description: "J'ai commencé à créer mes premiers bots Discord, passionné par l'idée de créer des outils pour les communautés.",
      icon: "ri-play-circle-line"
    },
    {
      year: "2024",
      title: "Création de Nexora Bot",
      description: "Développement de mon premier bot Discord public avec des fonctionnalités avancées de modération et de giveaways.",
      icon: "ri-discord-fill"
    },
    {
      year: "2024",
      title: "Naissance d'EasyTipe",
      description: "Création de mon propre langage de programmation inspiré du Python, conçu pour simplifier le développement no-code.",
      icon: "ri-code-s-slash-line"
    },
    {
      year: "Aujourd'hui",
      title: "Développeur freelance",
      description: "Je propose mes services de développement Discord et continue d'améliorer EasyTipe avec de nouvelles fonctionnalités.",
      icon: "ri-trophy-line"
    }
  ];

  return (
    <section id="parcours" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mon Parcours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une passion qui grandit chaque jour depuis mes débuts dans le développement
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {journey.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {step.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">🚀 Et maintenant ?</h3>
            <p className="text-lg leading-relaxed mb-6">
              Je continue de développer EasyTipe et de créer des bots Discord innovants. 
              Mon objectif est de rendre la programmation accessible à tous !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/easytipe" className="bg-white text-purple-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap">
                Découvrir EasyTipe
              </a>
              <a href="/#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap">
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}