export interface Vehiculo {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
}

export interface VehiculoInput {
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
}
