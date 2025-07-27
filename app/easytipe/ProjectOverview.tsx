'use client';

export default function ProjectOverview() {
  const objectives = [
    {
      icon: "ri-target-line",
      title: "Simplifier le typage",
      description: "Rendre accessible le typage logique aux utilisateurs non-techniques"
    },
    {
      icon: "ri-puzzle-line",
      title: "Intégration facile",
      description: "S'intégrer seamlessly dans les outils no-code existants"
    },
    {
      icon: "ri-shield-check-line",
      title: "Validation robuste",
      description: "Fournir des vérifications conditionnelles fiables"
    },
    {
      icon: "ri-speed-line",
      title: "Performance optimale",
      description: "Traitement rapide pour les automatisations en temps réel"
    }
  ];

  const features = [
    {
      icon: "ri-code-line",
      title: "Syntaxe intuitive",
      description: "Langage simple et lisible, inspiré des langages naturels"
    },
    {
      icon: "ri-checkbox-multiple-line",
      title: "Types natifs",
      description: "Support des types primitifs : string, number, boolean, array"
    },
    {
      icon: "ri-git-branch-line",
      title: "Logique conditionnelle",
      description: "Structures if/else et switch optimisées pour l'automatisation"
    },
    {
      icon: "ri-tools-line",
      title: "Intégrations",
      description: "Compatible avec Make, Voiceflow, et moteurs personnalisés"
    },
    {
      icon: "ri-bug-line",
      title: "Gestion d'erreurs",
      description: "Système robuste de gestion des erreurs et exceptions"
    },
    {
      icon: "ri-database-line",
      title: "Validation de données",
      description: "Vérification automatique des formats et contraintes"
    }
  ];

  const technologies = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "Webpack", color: "from-blue-500 to-indigo-600" },
    { name: "Jest", color: "from-red-400 to-red-600" },
    { name: "ESLint", color: "from-purple-400 to-purple-600" }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Objectifs */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Objectifs du projet
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            EasyTipe a été conçu pour répondre aux besoins spécifiques des créateurs d'automatisations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <i className={`${objective.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Fonctionnalités clés
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Un ensemble complet d'outils pour la gestion de types et la validation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Technologies utilisées
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Stack technique moderne pour une performance optimale
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 whitespace-nowrap`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}