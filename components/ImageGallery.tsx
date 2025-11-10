'use client';

import { useState } from 'react';
import Image from 'next/image';

// Imágenes de la galería
const galleryImages = [
  {
    id: 1,
    src: '/images/comedor.jpg',
    alt: 'Juego de comedor elegante',
    category: 'Comedores',
  },
  {
    id: 2,
    src: '/images/comedor2.jpg',
    alt: 'Mesa de comedor con sillas',
    category: 'Comedores',
  },
  {
    id: 3,
    src: '/images/comedor3.jpg',
    alt: 'Comedor moderno',
    category: 'Comedores',
  },
  {
    id: 4,
    src: '/images/sillas.jpg',
    alt: 'Sillas de comedor',
    category: 'Sillas',
  },
  {
    id: 5,
    src: '/images/sillas2.jpg',
    alt: 'Juego de sillas',
    category: 'Sillas',
  },
  {
    id: 6,
    src: '/images/sillasElegantes.jpg',
    alt: 'Sillas elegantes tapizadas',
    category: 'Sillas',
  },
  {
    id: 7,
    src: '/images/sillasElegantes2.jpg',
    alt: 'Sillas de diseño',
    category: 'Sillas',
  },
  {
    id: 8,
    src: '/images/sillasMesa.jpg',
    alt: 'Mesa con sillas',
    category: 'Comedores',
  },
  {
    id: 9,
    src: '/images/sillasMesa2.jpg',
    alt: 'Comedor completo',
    category: 'Comedores',
  },
  {
    id: 10,
    src: '/images/sillasMesa3.jpg',
    alt: 'Juego de comedor',
    category: 'Comedores',
  },
  {
    id: 11,
    src: '/images/mesaComedorGrande.jpg',
    alt: 'Mesa de comedor grande',
    category: 'Comedores',
  },
  {
    id: 12,
    src: '/images/comedores.jpg',
    alt: 'Comedor de madera',
    category: 'Comedores',
  },
  {
    id: 13,
    src: '/images/comedores2.jpg',
    alt: 'Comedor familiar',
    category: 'Comedores',
  },
  {
    id: 14,
    src: '/images/comedores3.jpg',
    alt: 'Mesa y sillas de comedor',
    category: 'Comedores',
  },
  {
    id: 15,
    src: '/images/vitrinaLiving.jpg',
    alt: 'Vitrina para living',
    category: 'Living',
  },
  {
    id: 16,
    src: '/images/vitrinaMaderaVidrio.jpg',
    alt: 'Vitrina de madera y vidrio',
    category: 'Living',
  },
  {
    id: 17,
    src: '/images/sillonYSillaCuero.jpg',
    alt: 'Sillón y silla de cuero',
    category: 'Living',
  },
  {
    id: 18,
    src: '/images/sillonVerdeVeladores.jpg',
    alt: 'Sillón verde con veladores',
    category: 'Living',
  },
  {
    id: 19,
    src: '/images/respaldoVeladores.jpg',
    alt: 'Respaldo de cama con veladores',
    category: 'Dormitorio',
  },
  {
    id: 20,
    src: '/images/veladoresEstante.jpg',
    alt: 'Veladores y estante',
    category: 'Dormitorio',
  },
  {
    id: 21,
    src: '/images/estantesBarComedores.jpg',
    alt: 'Estantes y bar para comedor',
    category: 'Living',
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Comedores', 'Sillas', 'Living', 'Dormitorio'];

  const filteredImages = filter === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-foreground hover:bg-neutral-light border border-neutral'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-light cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <p className="text-white text-sm font-medium px-4">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-light">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-foreground">
                {filteredImages[selectedImage].alt}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Categoría: {filteredImages[selectedImage].category}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {selectedImage + 1} / {filteredImages.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Anterior
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No hay imágenes en esta categoría</p>
        </div>
      )}
    </div>
  );
}
