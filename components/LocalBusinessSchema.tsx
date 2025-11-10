export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'Muebles Artesanales',
    description: 'Fabricación de muebles a medida y servicios de tapicería en Chile',
    url: 'https://tudominio.cl',
    telephone: '+56912345678',
    email: 'contacto@muebles.cl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.4489, // Actualizar con coordenadas reales
      longitude: -70.6693,
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
    image: 'https://tudominio.cl/og-image.jpg',
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
