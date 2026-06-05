import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const socialIcons = [
  { icon: Instagram, href: 'https://instagram.com/artedental_lr', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/artedental.lr', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/18299946879', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Arte Dental</p>
                <p className="text-accent-300 text-xs">La Romana</p>
              </div>
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
                  <s.icon className="w-5 h-5" />
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
