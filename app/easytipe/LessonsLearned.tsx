
'use client';

export default function LessonsLearned() {
  const lessons = [
    {
      category: "Conception de langage",
      icon: "ri-lightbulb-line",
      points: [
        "L'importance d'une syntaxe intuitive pour l'adoption",
        "Équilibre entre simplicité et expressivité",
        "Gestion des erreurs claire et utile pour l'utilisateur"
      ]
    },
    {
      category: "Intégration no-code",
      icon: "ri-puzzle-line",
      points: [
        "Adaptation aux contraintes des plateformes existantes",
        "Optimisation pour les performances en temps réel",
        "Documentation exhaustive cruciale pour l'adoption"
      ]
    },
    {
      category: "Développement",
      icon: "ri-code-line",
      points: [
        "Tests unitaires indispensables pour un langage",
        "Parsing robuste avec gestion d'erreurs détaillée",
        "Architecture modulaire pour faciliter les extensions"
      ]
    }
  ];

  const achievements = [
    {
      metric: "95%",
      description: "Réduction du temps de développement",
      icon: "ri-time-line"
    },
    {
      metric: "500+",
      description: "Automatisations créées",
      icon: "ri-settings-3-line"
    },
    {
      metric: "99.9%",
      description: "Fiabilité de validation",
      icon: "ri-shield-check-line"
    },
    {
      metric: "15+",
      description: "Plateformes supportées",
      icon: "ri-links-line"
    }
  ];

  const futureFeatures = [
    {
      title: "Types personnalisés",
      description: "Création de types complexes par l'utilisateur",
      status: "En développement"
    },
    {
      title: "Interface visuelle",
      description: "Éditeur graphique pour la logique",
      status: "Planifié"
    },
    {
      title: "API REST",
      description: "Service cloud pour l'exécution",
      status: "Recherche"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Lessons Learned */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Retours d'expérience
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Les leçons apprises lors du développement d'EasyTipe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <i className={`${lesson.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{lesson.category}</h3>
                <ul className="space-y-3">
                  {lesson.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Résultats obtenus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <i className={`${achievement.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.metric}</div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Évolutions futures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Intéressé par EasyTipe ?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment EasyTipe peut transformer vos automatisations et simplifier votre développement no-code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/LeDevLuffy/EasyTipe_original/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-book-line mr-2"></i>
              Documentation
            </a>
            <a 
              href="mailto:luffyfan70@gmail.com?subject=Intérêt pour EasyTipe&body=Bonjour,%0D%0A%0D%0AJe suis intéressé par EasyTipe et j'aimerais en savoir plus sur :%0D%0A%0D%0A- Les possibilités d'intégration%0D%0A- Les cas d'usage spécifiques%0D%0A- La documentation technique%0D%0A%0D%0AMerci !"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
