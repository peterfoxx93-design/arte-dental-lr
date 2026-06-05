import {
  Sparkles,
  Smile,
  Syringe,
  Bone,
  Activity,
  Scissors,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Limpieza Dental',
    desc: 'Profilaxis profesional para eliminar sarro y placa bacteriana. Mantén tu sonrisa limpia y saludable.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Smile,
    title: 'Blanqueamiento',
    desc: 'Recupera el brillo de tu sonrisa con nuestro blanqueamiento dental avanzado y seguro.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Activity,
    title: 'Ortodoncia',
    desc: 'Brackets tradicionales e invisibles. Corregimos la posición de tus dientes para una sonrisa perfecta.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Bone,
    title: 'Implantes',
    desc: 'Reemplaza dientes perdidos con implantes de titanio de última generación. Resultados naturales.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: Syringe,
    title: 'Endodoncia',
    desc: 'Tratamiento de conducto indoloro. Salvamos tu diente con tecnología y anestesia avanzada.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    icon: Scissors,
    title: 'Cirugía Oral',
    desc: 'Extracciones, cirugía de muelas del juicio y procedimientos quirúrgicos con máximo cuidado.',
    color: 'from-sky-400 to-indigo-500',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de tratamientos dentales con los más altos 
            estándares de calidad y cuidado personalizado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="card group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>

              {/* Hover effect line */}
              <div className="mt-4 w-12 h-0.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
