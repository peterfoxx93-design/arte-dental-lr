import { Stethoscope, Award, Heart } from 'lucide-react';

const stats = [
  { icon: Award, value: '7+', label: 'Años de experiencia' },
  { icon: Heart, value: '5,000+', label: 'Pacientes felices' },
  { icon: Stethoscope, value: '12+', label: 'Especialistas' },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden group">
              <img
                src="/images/clinic-interior.jpg"
                alt="Clínica Arte Dental La Romana"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-500/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-accent-500/10 -z-10" />
          </div>

          {/* Text column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En <strong>Arte Dental La Romana</strong> nos dedicamos a transformar sonrisas 
              con un enfoque humano y profesional. Desde nuestra fundación en 2018, hemos 
              atendido a más de 5,000 pacientes en La Romana y toda la región Este.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Contamos con un equipo de 12 especialistas altamente calificados y utilizamos 
              tecnología de última generación para garantizar tratamientos seguros, 
              efectivos y lo más cómodos posible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestra filosofía es simple: cada paciente es único y merece un plan de 
              tratamiento personalizado. No solo cuidamos tu sonrisa, cuidamos de ti.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-brand-50">
                  <stat.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-brand-700">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
