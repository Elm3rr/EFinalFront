interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconCar({ size = 20, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 16.5H3.5v-4l1.8-4.6A1.5 1.5 0 0 1 6.7 7h10.6a1.5 1.5 0 0 1 1.4.9l1.8 4.6v4H19" />
      <path d="M3.5 12.5h17" />
      <path d="M9 16.5h6" />
      <circle cx="7" cy="16.5" r="2" />
      <circle cx="17" cy="16.5" r="2" />
    </svg>
  );
}
