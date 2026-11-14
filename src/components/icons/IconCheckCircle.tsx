interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconCheckCircle({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.2 12.3 10.8 15 15.9 9.4" />
    </svg>
  );
}
