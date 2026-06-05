import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    text: 'Excelente atención. Desde que llegué me hicieron sentir en confianza. Mi blanqueamiento quedó espectacular y el precio muy accesible. Recomiendo Arte Dental al 100%.',
    rating: 5,
  },
  {
    name: 'Carlos Martínez',
    text: 'Llevo años viniendo aquí. El Dr. es súper profesional y todo el equipo es bien atento. Me hicieron una endodoncia y ni me dolió. Totalmente recomendados.',
    rating: 5,
  },
  {
    name: 'Ana Rodríguez',
    text: 'Mi hija le tenía miedo al dentista hasta que la trajimos aquí. La trataron con tanta paciencia y cariño que ahora ella misma pide venir. ¡Gracias Arte Dental!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mejor tarjeta de presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <MessageSquare className="w-8 h-8 text-accent-500/30 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
