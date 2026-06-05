'use client';

import { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, Send } from 'lucide-react';

const services = [
  'Selecciona un servicio',
  'Limpieza Dental',
  'Blanqueamiento',
  'Ortodoncia (Brackets)',
  'Implantes Dentales',
  'Endodoncia (Conducto)',
  'Cirugía Oral',
  'Consulta General',
  'Otro',
];

export default function AppointmentForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: '',
    fecha: '',
    hora: '',
    mensaje: '',
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    if (!form.nombre || !form.telefono || !form.servicio || form.servicio === services[0]) {
      setError('Completa nombre, teléfono y servicio.');
      return;
    }

    // WhatsApp fallback
    const msg = encodeURIComponent(
      `Hola! Soy ${form.nombre}. Quisiera agendar una cita para ${form.servicio}.` +
      (form.fecha ? `\nFecha preferida: ${form.fecha}` : '') +
      (form.hora ? `\nHora: ${form.hora}` : '') +
      (form.mensaje ? `\n${form.mensaje}` : '')
    );

    window.open(`https://wa.me/18299946879?text=${msg}`, '_blank');
    setSent(true);
    setForm({ nombre: '', telefono: '', email: '', servicio: '', fecha: '', hora: '', mensaje: '' });
  };

  return (
    <section id="citas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agenda tu Cita</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Déjanos tus datos y te contactaremos para confirmar tu cita. O escríbenos directo por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="(809) 000-0000"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition bg-white"
                    required
                  >
                    {services.map((s, i) => (
                      <option key={i} value={s === services[0] ? '' : s} disabled={i === 0}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha preferida</label>
                  <input
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hora preferida</label>
                  <input
                    name="hora"
                    value={form.hora}
                    onChange={handleChange}
                    type="time"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje adicional</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos más sobre tu consulta..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {sent ? (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                  ✅ Gracias. Te contactaremos pronto por WhatsApp para confirmar tu cita.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-white font-bold text-lg hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Solicitar Cita
                </button>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
              <h3 className="font-bold text-gray-900 mb-4">Contacto Directo</h3>
              <div className="space-y-3">
                <a href="tel:18299946879" className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition">
                  <Phone className="w-5 h-5 text-brand-500" />
                  <div>
                    <p className="text-xs text-gray-500">Teléfono</p>
                    <p className="font-semibold text-gray-900">(829) 994-6879</p>
                  </div>
                </a>
                <a href="https://wa.me/18299946879" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-gray-900">Envíanos un mensaje</p>
                  </div>
                </a>
                <a href="https://instagram.com/artedental_lr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition">
                  <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <div>
                    <p className="text-xs text-gray-500">Instagram</p>
                    <p className="font-semibold text-gray-900">@artedental_lr</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/artedental_lr"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white text-center hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-10 h-10 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <p className="font-bold text-lg">@artedental_lr</p>
              <p className="text-sm text-white/80">Síguenos en Instagram</p>
              <p className="text-xs text-white/60 mt-1">4,864 seguidores</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
