export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'Muebles Artesanales',
    description:
      'Fabricación de muebles a medida y servicios de tapicería en Chile',
    url: 'https://mueblesricardofuentes.cl',
    telephone: '+56976597755',
    email: 'contacto@mueblesfuentes.cl',
    areaServed: {
      '@type': 'Country',
      name: 'Chile',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: 'https://mueblesricardofuentes.cl/og-image.jpg',
    sameAs: [
      // Agregar redes sociales si existen
      // 'https://www.facebook.com/tupagina',
      // 'https://www.instagram.com/tupagina',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
