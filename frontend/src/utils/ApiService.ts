// Servicio para manejar las llamadas a la API
import config from '../utils/config';

export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  nivel: string;
  duracion: string;
  nivel_dificultad: string;
}

export interface Sesion {
  id: number;
  curso_id: number;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  ubicacion: string;
  precio: number;
  cupos_disponibles: number;
  estado: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  contenido: string;
  curso_relacionado: string;
  fecha: string;
}

class ApiService {
  private baseUrl: string;
  private maxRetries: number;
  private timeout: number;

  constructor() {
    this.baseUrl = config.apiBaseUrl;
    this.maxRetries = config.maxRetries;
    this.timeout = config.timeout;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout');
        }
        throw error;
      }
      throw new Error('Unknown error occurred');
    }
  }

  // Método para obtener todos los cursos
  async getCursos(): Promise<Curso[]> {
    try {
      return await this.request<Curso[]>('/cursos');
    } catch (error) {
      console.error('Error fetching cursos:', error);
      throw error;
    }
  }

  // Método para obtener un curso específico por ID
  async getCurso(cursoId: number): Promise<Curso> {
    try {
      return await this.request<Curso>(`/cursos/${cursoId}`);
    } catch (error) {
      console.error(`Error fetching curso ${cursoId}:`, error);
      throw error;
    }
  }

  // Método para obtener todas las sesiones
  async getSesiones(): Promise<Sesion[]> {
    try {
      return await this.request<Sesion[]>('/sesiones');
    } catch (error) {
      console.error('Error fetching sesiones:', error);
      throw error;
    }
  }

  // Método para obtener sesiones por curso
  async getSesionesByCurso(cursoId: number): Promise<Sesion[]> {
    try {
      return await this.request<Sesion[]>(`/sesiones/curso/${cursoId}`);
    } catch (error) {
      console.error(`Error fetching sesiones for curso ${cursoId}:`, error);
      throw error;
    }
  }

  // Método para obtener testimonios
  async getTestimonios(): Promise<Testimonio[]> {
    try {
      return await this.request<Testimonio[]>('/testimonios');
    } catch (error) {
      console.error('Error fetching testimonios:', error);
      throw error;
    }
  }

  // Método para obtener testimonios por curso
  async getTestimoniosByCurso(cursoId: number): Promise<Testimonio[]> {
    try {
      return await this.request<Testimonio[]>(`/testimonios/curso/${cursoId}`);
    } catch (error) {
      console.error(`Error fetching testimonios for curso ${cursoId}:`, error);
      throw error;
    }
  }

  // Método para enviar un formulario de contacto
  async sendContactForm(datos: any): Promise<any> {
    try {
      return await this.request('/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  }
}

export default new ApiService();