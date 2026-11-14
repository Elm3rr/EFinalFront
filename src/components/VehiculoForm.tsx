import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { Vehiculo, VehiculoInput } from '../types/vehiculo';
import { IconBroom, IconSave, IconUser } from './icons';

const ANIO_MAX = new Date().getFullYear() + 1;

const FORM_VACIO: VehiculoInput = {
  placa: '',
  marca: '',
  modelo: '',
  anio: new Date().getFullYear(),
  color: '',
};

interface VehiculoFormProps {
  editando: Vehiculo | null;
  onGuardar: (data: VehiculoInput, id?: number) => Promise<boolean>;
  onLimpiar: () => void;
}

export default function VehiculoForm({ editando, onGuardar, onLimpiar }: VehiculoFormProps) {
  const [form, setForm] = useState<VehiculoInput>(FORM_VACIO);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (editando) {
      setForm({
        placa: editando.placa,
        marca: editando.marca,
        modelo: editando.modelo,
        anio: editando.anio,
        color: editando.color,
      });
    } else {
      setForm(FORM_VACIO);
    }
  }, [editando]);

  const limpiar = () => {
    setForm(FORM_VACIO);
    onLimpiar();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.anio || form.anio < 1900 || form.anio > ANIO_MAX) {
      toast.error(`Ingresa un año válido (1900 - ${ANIO_MAX})`);
      return;
    }

    setGuardando(true);
    const ok = await onGuardar(
      { ...form, placa: form.placa.trim().toUpperCase() },
      editando?.id,
    );
    setGuardando(false);
    if (ok) {
      setForm(FORM_VACIO);
    }
  };

  return (
    <form className="vehiculo-form" onSubmit={handleSubmit}>
      <div className="card__header card__header--form">
        <span className="form-badge">
          <IconUser size={22} color="#1656d9" />
        </span>
        <div>
          <h2>{editando ? `Editar vehículo #${editando.id}` : 'Vehículo'}</h2>
          <p className="form-subtitle">Complete la información del formulario</p>
        </div>
      </div>

      <label className="form-field">
        <span>Placa</span>
        <input
          type="text"
          placeholder="Ingrese la placa (ej. P123ABC)"
          value={form.placa}
          onChange={(e) => setForm((f) => ({ ...f, placa: e.target.value }))}
          required
        />
      </label>

      <label className="form-field">
        <span>Marca</span>
        <input
          type="text"
          placeholder="Ingrese la marca"
          value={form.marca}
          onChange={(e) => setForm((f) => ({ ...f, marca: e.target.value }))}
          required
        />
      </label>

      <label className="form-field">
        <span>Modelo</span>
        <input
          type="text"
          placeholder="Ingrese el modelo"
          value={form.modelo}
          onChange={(e) => setForm((f) => ({ ...f, modelo: e.target.value }))}
          required
        />
      </label>

      <label className="form-field">
        <span>Año</span>
        <input
          type="number"
          placeholder="Ingrese el año"
          min={1900}
          max={ANIO_MAX}
          value={form.anio}
          onChange={(e) => setForm((f) => ({ ...f, anio: Number(e.target.value) }))}
          required
        />
      </label>

      <label className="form-field">
        <span>Color</span>
        <input
          type="text"
          placeholder="Ingrese el color"
          value={form.color}
          onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
          required
        />
      </label>

      <div className="form-actions">
        <button type="button" className="btn btn--outline" onClick={limpiar} disabled={guardando}>
          <IconBroom size={16} color="#1656d9" />
          Limpiar
        </button>
        <button type="submit" className="btn btn--primary" disabled={guardando}>
          <IconSave size={16} color="#ffffff" />
          Guardar
        </button>
      </div>
    </form>
  );
}
