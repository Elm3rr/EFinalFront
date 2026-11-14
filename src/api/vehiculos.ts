import type { Vehiculo, VehiculoInput } from '../types/vehiculo';

const API_BASE = 'https://localhost:7245/api/vehiculos';

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = `Error ${res.status}`;
    try {
      const text = await res.text();
      if (text) message = text;
    } catch {
      // sin cuerpo de error legible, se conserva el mensaje por defecto
    }
    throw new Error(message);
  }
  if (res.status === 204) {
    return undefined as T;
  }
  return res.json() as Promise<T>;
}

export function getVehiculos(): Promise<Vehiculo[]> {
  return fetch(API_BASE).then((res) => handleResponse<Vehiculo[]>(res));
}

export function crearVehiculo(data: VehiculoInput): Promise<Vehiculo> {
  return fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Vehiculo>(res));
}

export function actualizarVehiculo(id: number, data: VehiculoInput): Promise<Vehiculo> {
  return fetch(`${API_BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => handleResponse<Vehiculo>(res));
}

export function borrarVehiculo(id: number): Promise<void> {
  return fetch(`${API_BASE}/${id}`, { method: 'DELETE' }).then((res) => handleResponse<void>(res));
}
