import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Arte Dental La Romana | Odontología de Calidad en La Romana',
  description:
    'Arte Dental La Romana — cuidado dental profesional con más de 7 años de experiencia. Limpieza, blanqueamiento, ortodoncia, implantes y más. Agenda tu cita al (829) 994-6879.',
  keywords: [
    'dentista La Romana',
    'odontólogo La Romana',
    'clínica dental La Romana',
    'blanqueamiento dental',
    'ortodoncia La Romana',
    'implantes dentales RD',
    'Arte Dental',
  ],
  openGraph: {
    title: 'Arte Dental La Romana | Odontología de Calidad',
    description:
      'Transformamos sonrisas con tecnología de punta y un equipo de especialistas comprometidos con tu salud bucal.',
    type: 'website',
    locale: 'es_DO',
    siteName: 'Arte Dental La Romana',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
