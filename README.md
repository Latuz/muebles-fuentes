# 🪑 Muebles Artesanales - Sitio Web

Sitio web profesional para negocio de muebles a medida y tapicería en Chile. Construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ Diseño mobile-first y totalmente responsivo
- ✅ Optimizado para SEO (búsquedas locales en Chile)
- ✅ Galería de imágenes con lazy loading
- ✅ Botón flotante de WhatsApp
- ✅ Paleta de colores cálida y natural
- ✅ Performance optimizada (Core Web Vitals)
- ✅ Metadata OpenGraph para redes sociales

## 📋 Páginas

- **Home**: Hero section, servicios y CTA
- **Galería**: Grid de imágenes con filtros y lightbox
- **Contacto**: Información de contacto y FAQs

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Hosting**: Vercel (Free Tier)
- **DNS**: Cloudflare (Free Tier)

## 🏃 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 📝 Personalización

### 1. Información de Contacto

Actualiza los siguientes archivos con tu información:

- `components/Navbar.tsx` - Número de WhatsApp
- `components/Footer.tsx` - Teléfono, email, ubicación
- `components/WhatsAppButton.tsx` - Número de WhatsApp
- `app/contacto/page.tsx` - Todos los datos de contacto

### 2. Imágenes

Reemplaza los placeholders en `/public/images/` con tus fotos:

- Formato recomendado: JPG o WebP
- Tamaño recomendado: 1200x800px
- Optimiza las imágenes antes de subirlas

### 3. Metadata SEO

Actualiza en `app/layout.tsx`:
- Nombre del negocio
- Descripción
- Keywords
- Ciudad/ubicación

### 4. Colores

Modifica la paleta en `app/globals.css`:
```css
:root {
  --primary: #8B6F47;
  --secondary: #D4A574;
  /* ... más colores */
}
```

## 🚀 Deployment en Vercel

### Opción 1: Desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático ✨

### Opción 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 🌐 Configuración DNS (Cloudflare + NIC.cl)

### 1. Cloudflare

1. Crea cuenta en [cloudflare.com](https://cloudflare.com)
2. Agrega tu dominio
3. Copia los nameservers (ej: `ns1.cloudflare.com`)

### 2. NIC.cl

1. Ingresa a tu cuenta en [nic.cl](https://nic.cl)
2. Ve a "Administrar dominio"
3. Actualiza los nameservers con los de Cloudflare
4. Espera 24-48 horas para propagación

### 3. Conectar Vercel

En Cloudflare DNS:
```
Type: CNAME
Name: @
Target: cname.vercel-dns.com
Proxy: Activado (nube naranja)
```

## 📊 Analytics

Vercel Analytics está incluido en el free tier. Para activarlo:

1. Ve a tu proyecto en Vercel
2. Settings → Analytics
3. Enable Analytics

## ✅ Checklist Post-Deploy

- [ ] Actualizar información de contacto
- [ ] Subir imágenes reales
- [ ] Configurar dominio personalizado
- [ ] Verificar SEO con Google Search Console
- [ ] Probar en dispositivos móviles
- [ ] Verificar Core Web Vitals
- [ ] Configurar Google Analytics (opcional)

## 📱 Números de WhatsApp

Formato correcto para Chile:
```
Número: +569 1234 5678
URL: https://wa.me/56912345678
```

## 🎨 Recursos Adicionales

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [Cloudflare Docs](https://developers.cloudflare.com)

## 📄 Licencia

Este proyecto es privado y de uso exclusivo para el negocio.

---

**Desarrollado con ❤️ para Muebles Artesanales**
