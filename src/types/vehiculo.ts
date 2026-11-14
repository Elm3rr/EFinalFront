export interface Vehiculo {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  estado: boolean;
}

export interface VehiculoInput {
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  estado: boolean;
}
