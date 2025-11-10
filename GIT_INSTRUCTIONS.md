# 📦 Instrucciones Git y GitHub

## ✅ Estado Actual

El repositorio Git ya está inicializado y tienes tu primer commit:
```
✓ Git inicializado
✓ Todas las imágenes agregadas (21 imágenes de galería + logo)
✓ Primer commit realizado: "Initial commit: Sitio web mueblería con imágenes reales"
```

## 🚀 Próximos Pasos

### 1. Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Configura:
   - **Repository name**: `muebleria-sitio` (o el nombre que prefieras)
   - **Description**: "Sitio web profesional para mueblería en Chile"
   - **Visibility**: Private (recomendado) o Public
   - **NO** marques "Initialize with README" (ya tienes uno)
4. Click en **"Create repository"**

### 2. Conectar tu Repositorio Local con GitHub

GitHub te mostrará instrucciones. Usa estas (reemplaza `TU_USUARIO` con tu usuario de GitHub):

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USUARIO/muebleria-sitio.git

# Verificar que se agregó correctamente
git remote -v

# Subir tu código a GitHub
git branch -M main
git push -u origin main
```

### 3. Autenticación

Si es tu primera vez usando Git con GitHub, te pedirá autenticación:

**Opción A: Personal Access Token (Recomendado)**
1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Selecciona scopes: `repo` (todos los permisos de repositorio)
4. Copia el token
5. Cuando Git te pida password, usa el token (no tu contraseña)

**Opción B: GitHub CLI**
```bash
# Instalar GitHub CLI (si no lo tienes)
brew install gh

# Autenticarte
gh auth login

# Seguir las instrucciones
```

## 📝 Comandos Git Útiles

### Ver estado del repositorio
```bash
git status
```

### Hacer cambios y commit
```bash
# Ver qué archivos cambiaron
git status

# Agregar archivos modificados
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

### Ver historial de commits
```bash
git log --oneline
```

### Crear una nueva rama (para experimentar)
```bash
# Crear y cambiar a nueva rama
git checkout -b nombre-rama

# Volver a main
git checkout main
```

## 🔄 Workflow Recomendado

### Para cambios pequeños:
```bash
# 1. Hacer tus cambios en los archivos
# 2. Ver qué cambió
git status

# 3. Agregar y commit
git add .
git commit -m "Actualizar información de contacto"

# 4. Subir a GitHub
git push
```

### Para cambios grandes:
```bash
# 1. Crear rama nueva
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "Agregar nueva funcionalidad"

# 3. Subir rama
git push -u origin feature/nueva-funcionalidad

# 4. En GitHub, crear Pull Request
# 5. Revisar y hacer merge a main
```

## 📋 Checklist Post-GitHub

Después de subir a GitHub:

- [ ] Verificar que el código está en GitHub
- [ ] Configurar repositorio como Private (si es necesario)
- [ ] Agregar descripción y topics en GitHub
- [ ] Conectar con Vercel para auto-deploy

## 🚀 Conectar con Vercel

Una vez que tu código esté en GitHub:

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará Next.js automáticamente
5. Click en **"Deploy"**
6. ¡Listo! Cada push a `main` hará auto-deploy

## 🔐 Archivo .gitignore

Ya tienes un `.gitignore` que excluye:
- `node_modules/`
- `.next/`
- `.env*.local`
- Archivos de sistema

## 💡 Tips

### Mensajes de Commit Claros
```bash
# ✅ Buenos mensajes
git commit -m "Actualizar número de teléfono en contacto"
git commit -m "Agregar 5 nuevas imágenes a galería"
git commit -m "Fix: Corregir error en navegación móvil"

# ❌ Malos mensajes
git commit -m "cambios"
git commit -m "fix"
git commit -m "update"
```

### Antes de Push
```bash
# Siempre revisa qué vas a subir
git status
git diff

# Prueba que todo funcione
npm run build
```

### Deshacer Cambios (si te equivocaste)
```bash
# Deshacer cambios no commiteados
git checkout -- archivo.tsx

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer último commit (elimina cambios)
git reset --hard HEAD~1
```

## 📞 Soporte

- **Git Docs**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

---

## 🎯 Resumen Rápido

```bash
# Ya hecho ✓
git init
git add .
git commit -m "Initial commit: Sitio web mueblería con imágenes reales"

# Por hacer:
# 1. Crear repo en GitHub
# 2. Conectar:
git remote add origin https://github.com/TU_USUARIO/muebleria-sitio.git
git push -u origin main

# 3. Conectar con Vercel para deploy automático
```

¡Tu sitio está listo para ser desplegado! 🚀
