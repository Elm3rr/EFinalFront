import { IconCar } from './icons';

interface StatsCardProps {
  total: number;
}

export default function StatsCard({ total }: StatsCardProps) {
  return (
    <div className="stats-card">
      <span className="stats-card__badge">
        <IconCar size={24} color="#1656d9" />
      </span>
      <div>
        <p className="stats-card__label">Total de vehículos:</p>
        <p className="stats-card__value">{total}</p>
      </div>
    </div>
  );
}
