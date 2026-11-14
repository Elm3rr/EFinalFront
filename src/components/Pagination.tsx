interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const desde = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const hasta = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="pagination">
      <p className="pagination__info">
        Mostrando {desde} a {hasta} de {totalItems} registros
      </p>
      <div className="pagination__controls">
        <button
          type="button"
          className="btn btn--pagination"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button
          type="button"
          className="btn btn--pagination"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
