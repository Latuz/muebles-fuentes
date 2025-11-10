# 🚀 Guía de Deployment

## Pre-requisitos

- [ ] Cuenta en GitHub
- [ ] Cuenta en Vercel
- [ ] Cuenta en Cloudflare (opcional, para DNS)
- [ ] Dominio registrado en NIC.cl

## Paso 1: Preparar el Código

### 1.1 Actualizar Información

Antes de hacer deploy, actualiza:

**Números de teléfono y WhatsApp:**
```bash
# Buscar y reemplazar en todos los archivos:
56912345678 → TU_NUMERO_REAL
```

**Email:**
```bash
contacto@muebles.cl → TU_EMAIL_REAL
```

**Nombre del negocio:**
```bash
Muebles Artesanales → TU_NOMBRE_REAL
```

**Área de servicio:**
```bash
Chile → TU_ÁREA_DE_SERVICIO
```

### 1.2 Agregar Imágenes

1. Reemplaza los archivos en `/public/images/`
2. Usa formato JPG o WebP
3. Tamaño recomendado: 1200x800px
4. Optimiza con [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)

### 1.3 Actualizar Dominio

En los siguientes archivos, reemplaza `https://tudominio.cl`:

- `app/sitemap.ts`
- `components/LocalBusinessSchema.tsx`
- `public/robots.txt`

## Paso 2: Subir a GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Commit
git commit -m "Initial commit: Sitio web mueblería"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Push
git branch -M main
git push -u origin main
```

## Paso 3: Deploy en Vercel

### Opción A: Desde la Web

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará Next.js automáticamente
5. Click en "Deploy"
6. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

## Paso 4: Configurar Dominio Personalizado

### 4.1 En Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio: `tudominio.cl`
4. Vercel te dará un registro DNS para configurar

### 4.2 Opción 1: DNS Directo (Sin Cloudflare)

En NIC.cl:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### 4.3 Opción 2: Con Cloudflare (Recomendado)

**Paso 1: Configurar Cloudflare**

1. Crea cuenta en [cloudflare.com](https://cloudflare.com)
2. Click en "Add a Site"
3. Ingresa tu dominio: `tudominio.cl`
4. Selecciona plan Free
5. Cloudflare escaneará tus DNS actuales
6. Copia los nameservers (ejemplo):
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```

**Paso 2: Actualizar NIC.cl**

1. Ingresa a [nic.cl](https://nic.cl)
2. Inicia sesión
3. Ve a "Mis Dominios"
4. Selecciona tu dominio
5. Click en "Modificar Nameservers"
6. Ingresa los nameservers de Cloudflare
7. Guarda cambios
8. **Espera 24-48 horas** para propagación

**Paso 3: Configurar DNS en Cloudflare**

1. En Cloudflare, ve a DNS
2. Agrega registro CNAME:
   ```
   Type: CNAME
   Name: @
   Target: cname.vercel-dns.com
   Proxy status: Proxied (nube naranja)
   ```
3. Agrega registro CNAME para www:
   ```
   Type: CNAME
   Name: www
   Target: cname.vercel-dns.com
   Proxy status: Proxied (nube naranja)
   ```

**Paso 4: Optimizaciones en Cloudflare**

En Cloudflare Dashboard:

1. **SSL/TLS**
   - Mode: Full (strict)
   - Always Use HTTPS: ON
   - Automatic HTTPS Rewrites: ON

2. **Speed**
   - Auto Minify: HTML, CSS, JS (todos ON)
   - Brotli: ON
   - Early Hints: ON

3. **Caching**
   - Caching Level: Standard
   - Browser Cache TTL: 4 hours

## Paso 5: Verificar Deployment

### 5.1 Checklist de Verificación

- [ ] Sitio carga correctamente
- [ ] Todas las páginas funcionan (/, /galeria, /contacto)
- [ ] Botón de WhatsApp funciona
- [ ] Links de contacto funcionan
- [ ] Imágenes cargan correctamente
- [ ] Responsive en móvil
- [ ] Navegación funciona

### 5.2 Probar en Dispositivos

- [ ] iPhone/Safari
- [ ] Android/Chrome
- [ ] Desktop/Chrome
- [ ] Desktop/Firefox
- [ ] Desktop/Safari

### 5.3 Performance

Verifica en [PageSpeed Insights](https://pagespeed.web.dev/):
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

## Paso 6: SEO Post-Deploy

### 6.1 Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio)
3. Verifica propiedad (método DNS en Cloudflare)
4. Envía sitemap: `https://tudominio.cl/sitemap.xml`

### 6.2 Google Business Profile (Opcional)

**Nota:** Solo si tienes una ubicación física para clientes.

1. Crea perfil en [business.google.com](https://business.google.com)
2. Agrega información del negocio
3. Verifica ubicación física
4. Agrega fotos
5. Vincula con tu sitio web

## Paso 7: Analytics (Opcional)

### Vercel Analytics (Incluido en Free Tier)

1. En Vercel Dashboard
2. Tu proyecto → Analytics
3. Enable Analytics
4. ¡Listo! Automático

### Google Analytics (Opcional)

1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Crea propiedad
3. Copia el ID: `G-XXXXXXXXXX`
4. Agrega a `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Redeploy en Vercel

## Troubleshooting

### Problema: Dominio no resuelve

**Solución:**
- Espera 24-48 horas para propagación DNS
- Verifica nameservers en NIC.cl
- Usa [whatsmydns.net](https://whatsmydns.net) para verificar propagación

### Problema: Error 525 (SSL)

**Solución:**
- En Cloudflare: SSL/TLS → Full (strict)
- Espera unos minutos

### Problema: Imágenes no cargan

**Solución:**
- Verifica que las imágenes estén en `/public/images/`
- Verifica nombres de archivo en `components/ImageGallery.tsx`
- Redeploy

### Problema: WhatsApp no funciona

**Solución:**
- Verifica formato: `56912345678` (sin +, sin espacios)
- Prueba el link directamente

## Mantenimiento

### Actualizar Contenido

```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de cambios"
git push

# Vercel hace auto-deploy
```

### Actualizar Imágenes

1. Reemplaza archivos en `/public/images/`
2. Commit y push
3. Auto-deploy

### Backup

- Código: Respaldado en GitHub
- Configuración: Exportar DNS de Cloudflare
- Imágenes: Mantener copia local

## Costos

- **Vercel**: $0 (Free tier)
- **Cloudflare**: $0 (Free tier)
- **NIC.cl**: ~$10.000 CLP/año (dominio .cl)
- **Total mensual**: $0 🎉

## Soporte

- Vercel: [vercel.com/support](https://vercel.com/support)
- Cloudflare: [community.cloudflare.com](https://community.cloudflare.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**¡Éxito con tu sitio web! 🚀**
