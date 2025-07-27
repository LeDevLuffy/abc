'use client';

export default function AboutSkills() {
  const skills = [
    {
      category: "Développement Discord",
      icon: "ri-discord-fill",
      items: [
        "Bots Discord personnalisés",
        "Modération automatique",
        "Système de tickets",
        "Intégrations API",
        "Gestion de communautés"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Langages & Technologies",
      icon: "ri-code-s-slash-line",
      items: [
        "JavaScript / Node.js",
        "Python",
        "EasyTipe (création personnelle)",
        "Discord.js",
        "Bases de données"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Projets Innovants",
      icon: "ri-lightbulb-line",
      items: [
        "EasyTipe - Langage de programmation",
        "Nexora Bot - Bot communautaire",
        "Outils d'automatisation",
        "Systèmes de logique visuelle",
        "Intégrations no-code"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            À 19 ans, je me spécialise dans le développement Discord et la création d'outils innovants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${skill.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}