import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '829-994-6879', href: 'tel:18299946879' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Envíanos un mensaje', href: 'https://wa.me/18299946879' },
  { icon: MapPin, label: 'Dirección', value: 'La Romana, República Dominicana' },
  { icon: Clock, label: 'Horario', value: 'Lun-Vie: 9am-6pm | Sáb: 9am-1pm' },
];

const socialLinks = [
  {
    href: 'https://instagram.com/artedental_lr',
    label: '@artedental_lr',
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
  },
  {
    href: 'https://facebook.com/artedental.lr',
    label: '/artedental.lr',
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-28 bg-brand-500 text-white overflow-hidden">
      {/* Decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Estamos listos para atenderte. Agenda tu cita hoy y descubre una nueva experiencia dental.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-300 transition">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-sm"
                  >
                    <s.icon />
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
              />
              <input
                type="tel"
                placeholder="Tu teléfono"
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
              />
              <textarea
                rows={4}
                placeholder="Tu mensaje"
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-500 font-bold hover:bg-gray-100 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
