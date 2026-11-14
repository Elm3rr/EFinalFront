import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { actualizarVehiculo, borrarVehiculo, crearVehiculo, getVehiculos } from '../api/vehiculos';
import type { Vehiculo, VehiculoInput } from '../types/vehiculo';

export const TOAST_DURATION_MS = 4000;

function extraerMensajeError(err: unknown, fallback: string): string {
  if (err instanceof Error && err.message) return err.message;
  return fallback;
}

export function useVehiculos() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [cargando, setCargando] = useState(false);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const data = await getVehiculos();
      setVehiculos(data);
    } catch (err) {
      toast.error(extraerMensajeError(err, 'No se pudieron cargar los vehículos'), {
        duration: TOAST_DURATION_MS,
      });
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const crear = useCallback(async (data: VehiculoInput) => {
    try {
      const nuevo = await crearVehiculo(data);
      setVehiculos((prev) => [nuevo, ...prev]);
      toast.success('Vehículo creado correctamente', { duration: TOAST_DURATION_MS });
      return true;
    } catch (err) {
      toast.error(extraerMensajeError(err, 'No se pudo crear el vehículo'), {
        duration: TOAST_DURATION_MS,
      });
      return false;
    }
  }, []);

  const actualizar = useCallback(async (id: number, data: VehiculoInput) => {
    try {
      await actualizarVehiculo(id, data);
      setVehiculos((prev) => prev.map((v) => (v.id === id ? { ...v, ...data } : v)));
      toast.success('Vehículo actualizado correctamente', { duration: TOAST_DURATION_MS });
      return true;
    } catch (err) {
      toast.error(extraerMensajeError(err, 'No se pudo actualizar el vehículo'), {
        duration: TOAST_DURATION_MS,
      });
      return false;
    }
  }, []);

  const eliminar = useCallback(async (id: number) => {
    try {
      await borrarVehiculo(id);
      setVehiculos((prev) => prev.filter((v) => v.id !== id));
      toast.success('Vehículo eliminado correctamente', { duration: TOAST_DURATION_MS });
      return true;
    } catch (err) {
      toast.error(extraerMensajeError(err, 'No se pudo eliminar el vehículo'), {
        duration: TOAST_DURATION_MS,
      });
      return false;
    }
  }, []);

  return { vehiculos, cargando, cargar, crear, actualizar, eliminar };
}
