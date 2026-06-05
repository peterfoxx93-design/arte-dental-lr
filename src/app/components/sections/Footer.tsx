import { Heart, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const socialIcons = [
  {
    href: 'https://instagram.com/artedental_lr',
    label: 'Instagram',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
  },
  {
    href: 'https://facebook.com/artedental.lr',
    label: 'Facebook',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
  },
  { href: 'https://wa.me/18299946879', label: 'WhatsApp', icon: () => <MessageCircle className="w-5 h-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Arte Dental"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Reflejando el arte en tu sonrisa. Cuidado dental profesional con calidez y excelencia.
            </p>
            <div className="flex items-center gap-1 text-xs text-white/40">
              Hecho con <Heart className="w-3 h-3 text-red-400 fill-red-400" /> en RD
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent-300 transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Horarios</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="text-white/80 font-medium">Lun - Vie</span>
                <br />9:00am - 6:00pm
              </li>
              <li>
                <span className="text-white/80 font-medium">Sábado</span>
                <br />9:00am - 1:00pm
              </li>
              <li>
                <span className="text-white/80 font-medium">Domingo</span>
                <br />Cerrado
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-4">
              @artedental_lr
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
          &copy; 2026 Arte Dental La Romana. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
