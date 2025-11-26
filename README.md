# Cursos de IA

Este es un proyecto web para ofrecer cursos de inteligencia artificial en diferentes niveles: inicial, intermedio y avanzado.

## 🎉 Mejoras Recientes

✅ **Backend**: Configuración CORS, fechas dinámicas para sesiones  
✅ **Frontend**: Integración con API, manejo de errores, estados de carga  
✅ **Código**: Eliminación de console.log, mejores prácticas TypeScript  
✅ **Accesibilidad**: Aria-labels en componentes interactivos

## Descripción

Plataforma web para la gestión y presentación de cursos de inteligencia artificial, con funcionalidades para mostrar información sobre diferentes niveles de cursos, fechas de sesiones, precios, ubicaciones y testimonios de estudiantes.

## Tecnologías utilizadas

- **Frontend**: React 19.2.0 con TypeScript
- **Estilos**: CSS con enfoque en responsividad y accesibilidad
- **Backend**: Python con FastAPI 0.115.0
- **Base de datos**: En memoria (en la versión de ejemplo)

## Estructura del proyecto

```
cursos-ia/
├── frontend/                 # Código del frontend
│   ├── public/              # Archivos públicos
│   ├── src/                 # Código fuente
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── utils/           # Utilidades y servicios
│   │   └── assets/          # Recursos estáticos
│   ├── .env                 # Variables de entorno
│   └── package.json         # Dependencias del frontend
└── backend/                 # Código del backend
    ├── main.py              # Aplicación FastAPI principal
    ├── requirements.txt     # Dependencias del backend
    └── config.py            # Configuración del servidor
```

## Instalación y ejecución

### Backend

1. Navegar al directorio backend:
   ```bash
   cd cursos-ia/backend
   ```

2. Crear un entorno virtual (opcional pero recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Iniciar el servidor:
   ```bash
   python main.py
   ```

   El servidor estará disponible en `http://localhost:8000`

### Frontend

1. Navegar al directorio frontend:
   ```bash
   cd cursos-ia/frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000`

## Características

- ✅ Página de inicio con descripción de los cursos
- ✅ Sección de calendario con fechas dinámicas y precios variables
- ✅ Galería de testimonios de estudiantes con navegación
- ✅ Formulario de contacto y preinscripción con validación
- ✅ Recursos adicionales y documentación
- ✅ Diseño responsivo para dispositivos móviles y de escritorio
- ✅ Integración completa Frontend-Backend con manejo de errores
- ✅ Estados de carga y datos de fallback

## API Endpoints

- `GET /` - Información de la API
- `GET /cursos` - Obtener todos los cursos
- `GET /cursos/{id}` - Obtener un curso específico
- `GET /sesiones` - Obtener todas las sesiones
- `GET /sesiones/curso/{id}` - Obtener sesiones de un curso específico
- `GET /testimonios` - Obtener todos los testimonios
- `GET /testimonios/curso/{id}` - Obtener testimonios de un curso específico

## Configuración

### Variables de Entorno (Frontend)

Crear archivo `.env` en `frontend/`:
```env
REACT_APP_API_URL=http://localhost:8000
```

### Configuración del Backend

Editar `backend/config.py` para cambiar host, puerto, etc.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios que te gustaría hacer, antes de enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.