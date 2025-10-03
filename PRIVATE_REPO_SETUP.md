# Configuración de Repositorio Privado

## Estructura Recomendada:

### Repositorio Público (portafolio-nayeli)
- Código fuente del portafolio
- Archivos de configuración públicos
- README.md público
- Imágenes optimizadas para web

### Repositorio Privado (portafolio-nayeli-private)
- CV actualizado
- Información de contacto detallada
- Certificados y documentos
- Imágenes originales en alta resolución
- Configuraciones sensibles
- Notas personales y ideas

## Comandos para crear repositorio privado:

1. Crear en GitHub: https://github.com/new
   - Nombre: portafolio-nayeli-private
   - Visibilidad: Private
   - Agregar README

2. Clonar localmente:
   ```bash
   git clone git@github.com:nayeliloncomilla/portafolio-nayeli-private.git
   ```

3. Mover archivos sensibles:
   ```bash
   # Copiar archivos sensibles al repo privado
   cp /path/to/sensitive/files/* ./portafolio-nayeli-private/
   ```

## Archivos a mantener privados:
- CV con información completa
- Documentos personales
- Configuraciones con API keys
- Imágenes sin procesar
- Notas de desarrollo