'use client';

export default function Services() {
  const services = [
    {
      icon: "ri-shield-check-line",
      title: "Modération Automatique",
      description: "Systèmes de ban, mute, warn et filtrage automatique pour maintenir un environnement sain"
    },
    {
      icon: "ri-customer-service-2-line",
      title: "Système de Tickets",
      description: "Support client professionnel avec tickets personnalisés et gestion des demandes"
    },
    {
      icon: "ri-trophy-line",
      title: "Système de Niveaux",
      description: "Gamification avec niveaux, récompenses et classements pour engager votre communauté"
    },
    {
      icon: "ri-gift-line",
      title: "Giveaways",
      description: "Concours automatisés avec gestion des participants et tirage au sort équitable"
    },
    {
      icon: "ri-user-settings-line",
      title: "Attribution de Rôles",
      description: "Système automatique d'attribution de rôles basé sur les actions des utilisateurs"
    },
    {
      icon: "ri-live-line",
      title: "Intégrations API",
      description: "Connexion avec Twitch, YouTube et autres plateformes pour des fonctionnalités avancées"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services Proposés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour transformer votre serveur Discord en une communauté professionnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}