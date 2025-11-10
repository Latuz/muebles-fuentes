import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Muebles a Medida',
      description: 'Diseñamos y fabricamos muebles únicos adaptados a tus necesidades y espacios.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Tapicería',
      description: 'Renovamos y restauramos tus muebles con telas de alta calidad y acabados impecables.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Restauración',
      description: 'Devolvemos la vida a tus muebles antiguos con técnicas tradicionales y modernas.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-light via-background to-neutral min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Muebles Artesanales
                <span className="block text-primary mt-2">Hechos a tu Medida</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Creamos muebles únicos que transforman espacios. Calidad, diseño y atención personalizada en cada proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20muebles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Solicitar Cotización
                </a>
                <Link
                  href="/galeria"
                  className="bg-white hover:bg-neutral-light text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-center transition-all duration-300"
                >
                  Ver Galería
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-primary">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-xl font-semibold">Imagen Hero</p>
                  <p className="text-sm mt-2">Agrega tu imagen principal aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para crear y renovar los muebles de tus sueños
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-light rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para crear tu mueble ideal?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contáctanos hoy y comencemos a diseñar juntos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20muebles"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
