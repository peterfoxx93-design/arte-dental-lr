import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import AppointmentForm from './components/sections/AppointmentForm';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
    </>
  );
}
