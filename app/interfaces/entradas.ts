export interface Entradas {
  _id: string;
  descripcion: string;
  fechaCreacion: number;
  estado: EntradaEstado;
}

export type EntradaEstado = 'pendiente' | 'en progreso' | 'terminado';

