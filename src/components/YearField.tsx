import { useEffect, useRef, useState } from 'react';
import { IconCalendar, IconChevronLeft, IconChevronRight } from './icons';

const ANIOS_POR_PAGINA = 12;
const ANIO_ACTUAL = new Date().getFullYear();

interface YearFieldProps {
  value: number | null;
  placeholder: string;
  min?: number;
  max?: number;
  onChange: (value: number | null) => void;
}

function inicioDePagina(anio: number) {
  return anio - (anio % ANIOS_POR_PAGINA);
}

export default function YearField({
  value,
  placeholder,
  min = 1900,
  max = ANIO_ACTUAL + 1,
  onChange,
}: YearFieldProps) {
  const [open, setOpen] = useState(false);
  const [inicio, setInicio] = useState(() => inicioDePagina(value ?? ANIO_ACTUAL));
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const abrir = () => {
    if (!open) setInicio(inicioDePagina(value ?? ANIO_ACTUAL));
    setOpen((o) => !o);
  };

  const elegir = (anio: number | null) => {
    onChange(anio);
    setOpen(false);
  };

  const anios = Array.from({ length: ANIOS_POR_PAGINA }, (_, i) => inicio + i);
  const fin = inicio + ANIOS_POR_PAGINA - 1;

  return (
    <div className="date-field" ref={rootRef}>
      <button type="button" className="date-field__control" onClick={abrir}>
        <span className={`date-field__value${value ? '' : ' date-field__value--placeholder'}`}>
          {value ?? placeholder}
        </span>
        <IconCalendar size={18} color="#1656d9" />
      </button>

      {open && (
        <div className="date-field__panel" role="dialog" aria-label="Seleccionar año">
          <div className="date-field__panel-header">
            <button
              type="button"
              className="date-field__nav"
              aria-label="Años anteriores"
              disabled={inicio <= min}
              onClick={() => setInicio((i) => i - ANIOS_POR_PAGINA)}
            >
              <IconChevronLeft size={16} color="#1656d9" />
            </button>
            <span className="date-field__month-label">
              {inicio} - {fin}
            </span>
            <button
              type="button"
              className="date-field__nav"
              aria-label="Años siguientes"
              disabled={fin >= max}
              onClick={() => setInicio((i) => i + ANIOS_POR_PAGINA)}
            >
              <IconChevronRight size={16} color="#1656d9" />
            </button>
          </div>

          <div className="year-field__grid">
            {anios.map((anio) => (
              <button
                type="button"
                key={anio}
                disabled={anio < min || anio > max}
                className={
                  'year-field__year' +
                  (anio === value ? ' year-field__year--selected' : '') +
                  (anio === ANIO_ACTUAL ? ' year-field__year--current' : '')
                }
                onClick={() => elegir(anio)}
              >
                {anio}
              </button>
            ))}
          </div>

          <div className="date-field__panel-footer year-field__footer">
            <button type="button" className="date-field__today-btn" onClick={() => elegir(null)}>
              Borrar
            </button>
            <button type="button" className="date-field__today-btn" onClick={() => elegir(ANIO_ACTUAL)}>
              Este año
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
