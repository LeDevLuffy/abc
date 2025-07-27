'use client';

import { useState } from 'react';

export default function TechnicalDemo() {
  const [activeTab, setActiveTab] = useState('syntax');

  const codeExamples = {
    syntax: `// Déclaration de types simples
type User = {
  name: string,
  age: number,
  active: boolean
}

// Validation avec EasyTipe
validate user as User {
  name: required | minLength(2),
  age: required | range(18, 120),
  active: required | boolean
}

// Utilisation dans une automatisation
if (user.active && user.age >= 18) {
  trigger("send_welcome_email")
} else {
  trigger("send_age_verification")
}`,
    
    validation: `// Validation avancée avec conditions
type Order = {
  items: array,
  total: number,
  coupon: string?
}

validate order as Order {
  items: required | notEmpty,
  total: required | min(0),
  coupon: optional | format("COUPON_XXX")
}

// Logique conditionnelle
switch (order.total) {
  case > 100:
    apply_discount(10)
  case > 50:
    apply_discount(5)
  default:
    no_discount()
}`,
    
    integration: `// Intégration avec Make.com
export function processWebhook(data) {
  validate data as WebhookData {
    email: required | email,
    phone: optional | phone,
    country: required | in(["FR", "BE", "CH"])
  }
  
  if (valid) {
    return {
      status: "success",
      user_id: generateId(),
      next_action: "create_contact"
    }
  } else {
    return {
      status: "error",
      errors: getValidationErrors(),
      next_action: "show_error_form"
    }
  }
}`
  };

  const useCases = [
    {
      title: "Validation de formulaires",
      description: "Vérification automatique des données utilisateur",
      icon: "ri-file-list-3-line"
    },
    {
      title: "Automatisations Make",
      description: "Logique conditionnelle dans les scénarios",
      icon: "ri-settings-3-line"
    },
    {
      title: "Chatbots Voiceflow",
      description: "Gestion des réponses et validation",
      icon: "ri-chat-3-line"
    },
    {
      title: "APIs personnalisées",
      description: "Validation des payloads et réponses",
      icon: "ri-code-s-slash-line"
    }
  ];

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Démonstration technique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la syntaxe et les capacités d'EasyTipe à travers des exemples concrets
          </p>
        </div>

        {/* Code Examples */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('syntax')}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'syntax' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Syntaxe de base
              </button>
              <button
                onClick={() => setActiveTab('validation')}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'validation' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Validation avancée
              </button>
              <button
                onClick={() => setActiveTab('integration')}
                className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'integration' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Intégration
              </button>
            </div>
            
            <div className="p-6">
              <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm">
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Cas d'usage pratiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <i className={`${useCase.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}