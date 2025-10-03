# Gestión de Archivos Sensibles

## 📁 Archivos que DEBEN estar en repositorio privado:

### Documentos Personales:
- CV completo con información detallada
- Certificados originales
- Cartas de recomendación
- Documentos de identidad (copias)

### Configuraciones Sensibles:
- API keys reales
- Tokens de acceso
- Configuraciones de servicios externos
- Credenciales de bases de datos

### Imágenes Originales:
- Fotos personales sin procesar
- Imágenes en alta resolución
- Materiales de marca personal

## 🔧 Configuración de GitHub Secrets:

### En tu repositorio público, ve a:
Settings → Secrets and variables → Actions → New repository secret

### Secrets recomendados:
- `VITE_CONTACT_EMAIL`: Tu email principal
- `VITE_GOOGLE_ANALYTICS_ID`: ID de Google Analytics
- `VITE_CONTACT_FORM_ENDPOINT`: URL del servicio de formularios
- `DEPLOY_TOKEN`: Token para deployments automáticos

## 📋 Pasos para implementar:

### 1. Crear repositorio privado:
```bash
# En GitHub, crear: portafolio-nayeli-private (Private)
```

### 2. Configurar secrets:
- Ir a Settings del repo público
- Agregar secrets necesarios
- Nunca commitear archivos .env reales

### 3. Estructura de carpetas privadas:
```
portafolio-nayeli-private/
├── documents/
│   ├── cv-complete.pdf
│   ├── certificates/
│   └── recommendations/
├── images/
│   ├── originals/
│   └── processed/
├── config/
│   ├── production.env
│   └── staging.env
└── notes/
    ├── ideas.md
    └── improvements.md
```

## ⚠️ NUNCA commitear:
- Archivos .env con datos reales
- API keys
- Tokens de acceso
- Información personal sensible
- Credenciales de servicios