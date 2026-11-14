import { useState } from 'react';
import { Toaster } from 'sonner';
import ConfirmDialog from './components/ConfirmDialog';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import VehiculoForm from './components/VehiculoForm';
import VehiculoListado from './components/VehiculoListado';
import { TOAST_DURATION_MS, useVehiculos } from './hooks/useVehiculos';
import type { Vehiculo, VehiculoInput } from './types/vehiculo';
import './App.css';

function App() {
  const { vehiculos, crear, actualizar, eliminar } = useVehiculos();
  const [editando, setEditando] = useState<Vehiculo | null>(null);
  const [porEliminar, setPorEliminar] = useState<Vehiculo | null>(null);

  const handleGuardar = async (data: VehiculoInput, id?: number) => {
    const ok = id ? await actualizar(id, data) : await crear(data);
    if (ok) setEditando(null);
    return ok;
  };

  const solicitarEliminar = (id: number) => {
    const vehiculo = vehiculos.find((v) => v.id === id) ?? null;
    setPorEliminar(vehiculo);
  };

  const confirmarEliminar = async () => {
    if (!porEliminar) return;
    const id = porEliminar.id;
    setPorEliminar(null);
    await eliminar(id);
    if (editando?.id === id) setEditando(null);
  };

  return (
    <div className="page">
      <Header />

      <main className="container">
        <StatsCard total={vehiculos.length} />

        <div className="grid-main">
          <section className="card">
            <VehiculoListado
              vehiculos={vehiculos}
              onNuevo={() => setEditando(null)}
              onEditar={setEditando}
              onEliminar={solicitarEliminar}
            />
          </section>

          <aside className="card card--form">
            <VehiculoForm
              editando={editando}
              onGuardar={handleGuardar}
              onLimpiar={() => setEditando(null)}
            />
          </aside>
        </div>
      </main>

      <Toaster position="top-right" duration={TOAST_DURATION_MS} richColors closeButton />

      <ConfirmDialog
        open={porEliminar !== null}
        title="Eliminar vehículo"
        message={`¿Seguro que deseas eliminar el vehículo con placa "${porEliminar?.placa ?? ''}"? Esta acción no se puede deshacer.`}
        onConfirm={confirmarEliminar}
        onCancel={() => setPorEliminar(null)}
      />
    </div>
  );
}

export default App;
