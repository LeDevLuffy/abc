'use client';

export default function AboutContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet Discord ou vous êtes curieux d'en savoir plus sur EasyTipe ? Contactez-moi !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">💬 Restons en contact</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-discord-fill text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Discord</p>
                    <p className="text-gray-300">luffy029752</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">luffyfan70@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-github-fill text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-300">LeDevLuffy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">🎯 Mes spécialités</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-white">Bots Discord personnalisés</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-white">Développement EasyTipe</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-white">Outils d'automatisation</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-white">Intégrations no-code</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-white">Gestion de communautés</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-300 text-sm">
                  💡 Toujours ouvert aux nouveaux défis et aux projets innovants !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}