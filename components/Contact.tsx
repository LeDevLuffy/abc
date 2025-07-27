
'use client';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à Créer Votre Bot ?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-discord-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discord</h3>
                  <p className="text-gray-300">luffy029752</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">luffyfan70@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Disponibilité</h3>
                  <p className="text-gray-300">Lun-Ven: 8h-12h et 14h-17h (UTC+1)</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-speed-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Temps de réponse</h3>
                  <p className="text-gray-300">Sous 24h en moyenne</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="discord" className="block text-white font-semibold mb-2">Discord</label>
                <input 
                  type="text" 
                  id="discord"
                  name="discord"
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="username#1234"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-white font-semibold mb-2">Plan souhaité</label>
                <select 
                  id="plan"
                  name="plan"
                  className="w-full px-4 py-3 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-8"
                >
                  <option value="">Choisir un plan</option>
                  <option value="classique">Plan Classique (1 mois Nitro)</option>
                  <option value="moyen">Plan Moyen (2 mois Nitro)</option>
                  <option value="avance">Plan Avancé (3 mois Nitro)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">Description du projet</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Décrivez votre serveur et vos besoins..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
