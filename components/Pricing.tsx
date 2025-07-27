
'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "Plan Classique",
      price: "1 mois de Nitro",
      duration: "2-3 jours",
      support: "1 semaine",
      features: [
        "Installation et configuration d'un bot simple",
        "Fonctions de modération (ban, mute, warn)",
        "Messages de bienvenue personnalisés",
        "Logs basiques des actions",
        "Support pendant 1 semaine (corrections de bugs)"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Plan Moyen",
      price: "2 mois de Nitro",
      duration: "5-7 jours",
      support: "1 mois",
      features: [
        "Tout du Plan Classique",
        "Système de tickets personnalisé",
        "Giveaways automatiques",
        "Attribution automatique de rôles",
        "Support pendant 1 mois (ajouts mineurs, corrections)"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Plan Avancé",
      price: "3 mois de Nitro",
      duration: "10-14 jours",
      support: "3 mois",
      features: [
        "Tout du Plan Moyen",
        "Système de niveaux & récompenses",
        "Commandes personnalisées avancées",
        "Intégration API externes (Twitch, YouTube...)",
        "Support complet pendant 3 mois (évolutions régulières)"
      ],
      popular: false,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const handlePlanSelect = (plan: any) => {
    const subject = encodeURIComponent(`Commande - ${plan.name}`);
    const body = encodeURIComponent(`Bonjour,

Je souhaite commander le ${plan.name} pour ${plan.price}.

Détails de ma commande :
- Plan : ${plan.name}
- Prix : ${plan.price}
- Durée de développement : ${plan.duration}
- Support inclus : ${plan.support}

Merci de me recontacter pour finaliser cette commande.

Cordialement`);
    
    window.location.href = `mailto:luffyfan70@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs & Formules
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Paiement en Discord Nitro pour plus de simplicité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-4 ring-purple-500' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  🔥 PLUS POPULAIRE
                </div>
              )}
              
              <div className="p-8 pt-12">
                <div className={`w-20 h-20 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <i className="ri-discord-fill text-3xl text-white"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    {plan.price}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                  <span>⏱️ Temps: {plan.duration}</span>
                  <span>🛠️ Support: {plan.support}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="ri-check-line text-green-500 text-lg mr-3 mt-0.5"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer`}
                >
                  Choisir ce plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💎 Pourquoi Discord Nitro ?</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Le paiement en Discord Nitro permet une transaction simple et sécurisée entre développeurs. 
              Pas de frais cachés, pas de complications - juste un échange direct et transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
