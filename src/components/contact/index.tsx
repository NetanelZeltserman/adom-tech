import Navbar from '@/components/layout/Navbar';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact us
            </h1>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
} 