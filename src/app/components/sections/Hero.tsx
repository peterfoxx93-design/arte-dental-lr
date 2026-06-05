import { Phone, MessageCircle, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-50/50 via-brand-50/20 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Reflejando el arte en tu sonrisa
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
              Arte Dental
            </h1>
            <p className="text-xl sm:text-2xl text-accent-600 font-semibold mb-4">
              La Romana
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6 leading-relaxed">
              Transformamos sonrisas con tecnología de punta y un equipo de especialistas 
              comprometidos con tu salud bucal. Tu sonrisa es nuestra prioridad.
            </p>

            {/* Big Phone Number */}
            <a
              href="tel:18299946879"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 mb-6"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider">Llama ahora</p>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight">(829) 994-6879</p>
              </div>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/18299946879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-500/30 text-brand-600 font-semibold hover:bg-brand-50 transition-all duration-200"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-brand-500">7+</p>
                <p className="text-xs text-gray-500">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-500">4,864</p>
                <p className="text-xs text-gray-500">Seguidores</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-500">842</p>
                <p className="text-xs text-gray-500">Publicaciones</p>
              </div>
            </div>
          </div>

          {/* Right: Logo / Brand Mark */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Logo circle */}
              <div className="w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100">
                <div className="text-center p-6">
                  {/* Tooth icon with flanking shapes */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Left wing (navy) */}
                    <svg className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4" width="40" height="60" viewBox="0 0 40 60" fill="none">
                      <path d="M30 0C20 10 10 25 10 45C10 55 15 60 20 60C25 60 30 55 30 50C30 45 28 35 28 25C28 15 30 5 30 0Z" fill="#1a2a6c" opacity="0.15"/>
                    </svg>
                    {/* Tooth */}
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="60" height="70" viewBox="0 0 60 70" fill="none">
                      {/* Crown */}
                      <path d="M10 20C10 8 15 2 30 2C45 2 50 8 50 20V35C50 55 40 68 30 68C20 68 10 55 10 35V20Z" fill="#1a2a6c"/>
                      {/* Root left */}
                      <path d="M15 35C15 45 22 60 26 68L20 68C14 58 10 45 10 35H15Z" fill="#1a8a9e"/>
                      {/* Root right */}
                      <path d="M45 35C45 45 38 60 34 68L40 68C46 58 50 45 50 35H45Z" fill="#1a8a9e"/>
                      {/* Highlight */}
                      <ellipse cx="30" cy="22" rx="8" ry="12" fill="white" opacity="0.2"/>
                    </svg>
                    {/* Right wing (teal) */}
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4" width="40" height="60" viewBox="0 0 40 60" fill="none">
                      <path d="M10 0C20 10 30 25 30 45C30 55 25 60 20 60C15 60 10 55 10 50C10 45 12 35 12 25C12 15 10 5 10 0Z" fill="#1a8a9e" opacity="0.15"/>
                    </svg>
                  </div>
                  {/* Text below */}
                  <p className="text-lg font-bold text-brand-500">Arte Dental</p>
                  <p className="text-[10px] text-accent-600 uppercase tracking-widest mt-1">Reflejando el arte en tu sonrisa</p>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-500/10 -z-10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent-500/10 -z-20 scale-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
