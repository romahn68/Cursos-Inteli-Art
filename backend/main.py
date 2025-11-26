from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timedelta
import uvicorn

app = FastAPI(title="Cursos de IA API", version="1.0.0")

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todos los orígenes para producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos de datos
class Curso(BaseModel):
    id: int
    titulo: str
    descripcion: str
    nivel: str
    duracion: str
    nivel_dificultad: str

class Sesion(BaseModel):
    id: int
    curso_id: int
    fecha: str
    hora_inicio: str
    hora_fin: str
    ubicacion: str
    precio: float
    cupos_disponibles: int
    estado: str  # disponible, lleno, cancelado

class Testimonio(BaseModel):
    id: int
    nombre: str
    contenido: str
    curso_relacionado: str
    fecha: str

# Función auxiliar para generar fechas futuras
def get_future_date(days_ahead: int) -> str:
    """Retorna una fecha futura en formato YYYY-MM-DD"""
    future_date = datetime.now() + timedelta(days=days_ahead)
    return future_date.strftime("%Y-%m-%d")

# Datos de ejemplo
cursos_db = [
    Curso(
        id=1,
        titulo="IA para Principiantes",
        descripcion="Curso introductorio a la inteligencia artificial para personas sin conocimientos previos",
        nivel="Inicial 1.0",
        duracion="8 horas",
        nivel_dificultad="Básico"
    ),
    Curso(
        id=2,
        titulo="Herramientas de IA para Productividad",
        descripcion="Aprende a usar herramientas de IA para mejorar tu productividad como estudiante o profesional",
        nivel="Intermedio 2.0",
        duracion="12 horas",
        nivel_dificultad="Intermedio"
    ),
    Curso(
        id=3,
        titulo="IA Aplicada en Diseño y Desarrollo Web",
        descripcion="Aprovecha la IA para crear diseños, páginas web y soluciones avanzadas",
        nivel="Avanzado 3.0",
        duracion="20 horas",
        nivel_dificultad="Avanzado"
    )
]

sesiones_db = [
    Sesion(
        id=1,
        curso_id=1,
        fecha=get_future_date(15),
        hora_inicio="18:00",
        hora_fin="20:00",
        ubicacion="En línea",
        precio=80.0,
        cupos_disponibles=25,
        estado="disponible"
    ),
    Sesion(
        id=2,
        curso_id=2,
        fecha=get_future_date(25),
        hora_inicio="19:00",
        hora_fin="21:00",
        ubicacion="Centro de Capacitación ABC, Madrid",
        precio=120.0,
        cupos_disponibles=0,
        estado="lleno"
    ),
    Sesion(
        id=3,
        curso_id=3,
        fecha=get_future_date(40),
        hora_inicio="10:00",
        hora_fin="14:00",
        ubicacion="Coworking Tech, Barcelona",
        precio=200.0,
        cupos_disponibles=12,
        estado="disponible"
    )
]

testimonios_db = [
    Testimonio(
        id=1,
        nombre="María González",
        contenido="El curso inicial me ayudó a entender conceptos que parecían complejos. Ahora puedo usar herramientas de IA en mi trabajo diario.",
        curso_relacionado="IA para Principiantes",
        fecha="2024-01-15"
    ),
    Testimonio(
        id=2,
        nombre="Juan Pérez",
        contenido="Excelente curso 2.0. Aprendí a automatizar tareas repetitivas y ahora soy más eficiente en mi trabajo como diseñador.",
        curso_relacionado="Herramientas de IA para Productividad",
        fecha="2024-01-20"
    ),
    Testimonio(
        id=3,
        nombre="Ana Martínez",
        contenido="El curso 3.0 superó mis expectativas. Ahora puedo crear páginas web con IA y he mejorado significativamente mi portafolio.",
        curso_relacionado="IA Aplicada en Diseño y Desarrollo Web",
        fecha="2024-01-25"
    )
]

# Rutas de la API
@app.get("/")
def read_root():
    return {"message": "API de Cursos de IA", "version": "1.0.0"}

@app.get("/cursos", response_model=List[Curso])
def get_cursos():
    return cursos_db

@app.get("/cursos/{curso_id}", response_model=Curso)
def get_curso(curso_id: int):
    for curso in cursos_db:
        if curso.id == curso_id:
            return curso
    raise HTTPException(status_code=404, detail="Curso no encontrado")

@app.get("/sesiones", response_model=List[Sesion])
def get_sesiones():
    return sesiones_db

@app.get("/sesiones/curso/{curso_id}", response_model=List[Sesion])
def get_sesiones_por_curso(curso_id: int):
    sesiones_filtradas = [sesion for sesion in sesiones_db if sesion.curso_id == curso_id]
    return sesiones_filtradas

@app.get("/testimonios", response_model=List[Testimonio])
def get_testimonios():
    return testimonios_db

@app.get("/testimonios/curso/{curso_id}", response_model=List[Testimonio])
def get_testimonios_por_curso(curso_id: int):
    curso = next((c for c in cursos_db if c.id == curso_id), None)
    if not curso:
        raise HTTPException(status_code=404, detail="Curso no encontrado")
    
    testimonios_filtrados = [t for t in testimonios_db if t.curso_relacionado == curso.titulo]
    return testimonios_filtrados

if __name__ == "__main__":
    import config
    uvicorn.run(app, host=config.host, port=config.port, log_level=config.log_level, reload=config.reload)