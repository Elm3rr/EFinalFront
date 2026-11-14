import { useState } from 'react';
import type { Vehiculo } from '../types/vehiculo';
import { IconList, IconPencil, IconPlus, IconTrash } from './icons';
import Pagination from './Pagination';

const PAGE_SIZE = 6;

interface VehiculoListadoProps {
  vehiculos: Vehiculo[];
  onNuevo: () => void;
  onEditar: (vehiculo: Vehiculo) => void;
  onEliminar: (id: number) => void;
}

export default function VehiculoListado({
  vehiculos,
  onNuevo,
  onEditar,
  onEliminar,
}: VehiculoListadoProps) {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.max(1, Math.ceil(vehiculos.length / PAGE_SIZE));
  const paginaActual = Math.min(pagina, totalPaginas);
  const inicio = (paginaActual - 1) * PAGE_SIZE;
  const paginaVehiculos = vehiculos.slice(inicio, inicio + PAGE_SIZE);

  return (
    <>
      <div className="card__header">
        <h2>
          <IconList size={20} color="#1656d9" />
          Listado de Vehículos
        </h2>
        <button type="button" className="btn btn--primary" onClick={onNuevo}>
          <IconPlus size={16} color="#ffffff" />
          Nuevo Vehículo
        </button>
      </div>

      <div className="table-wrapper">
        <table className="vehiculos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Color</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paginaVehiculos.length === 0 ? (
              <tr>
                <td colSpan={7} className="vehiculos-table__empty">
                  No hay vehículos registrados
                </td>
              </tr>
            ) : (
              paginaVehiculos.map((vehiculo) => (
                <tr key={vehiculo.id}>
                  <td>{vehiculo.id}</td>
                  <td>{vehiculo.placa}</td>
                  <td>{vehiculo.marca}</td>
                  <td>{vehiculo.modelo}</td>
                  <td>{vehiculo.anio}</td>
                  <td>{vehiculo.color}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        className="icon-btn icon-btn--edit"
                        aria-label="Editar vehículo"
                        onClick={() => onEditar(vehiculo)}
                      >
                        <IconPencil size={16} color="#1656d9" />
                      </button>
                      <button
                        type="button"
                        className="icon-btn icon-btn--delete"
                        aria-label="Eliminar vehículo"
                        onClick={() => onEliminar(vehiculo.id)}
                      >
                        <IconTrash size={16} color="#e53e3e" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={paginaActual}
        totalPages={totalPaginas}
        totalItems={vehiculos.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPagina}
      />
    </>
  );
}
