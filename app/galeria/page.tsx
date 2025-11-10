import type { Metadata } from 'next';
import ImageGallery from '@/components/ImageGallery';

export const metadata: Metadata = {
  title: 'Galería - Muebles Artesanales',
  description: 'Explora nuestra colección de muebles a medida y trabajos de tapicería. Diseños únicos y calidad artesanal.',
  openGraph: {
    title: 'Galería - Muebles Artesanales',
    description: 'Explora nuestra colección de muebles a medida y trabajos de tapicería',
    locale: 'es_CL',
  },
};

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-light to-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Galería
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros trabajos más recientes. Cada pieza cuenta una historia única de artesanía y dedicación.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Te gustó lo que viste?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctanos para crear tu propio mueble personalizado
          </p>
          <a
            href="https://wa.me/56912345678?text=Hola,%20vi%20su%20galería%20y%20me%20interesa%20un%20mueble%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  );
}
