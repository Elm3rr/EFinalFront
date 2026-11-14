interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconList({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <circle cx="4.2" cy="6" r="1" fill={color} stroke="none" />
      <path d="M9 6h11" />
      <circle cx="4.2" cy="12" r="1" fill={color} stroke="none" />
      <path d="M9 12h11" />
      <circle cx="4.2" cy="18" r="1" fill={color} stroke="none" />
      <path d="M9 18h11" />
    </svg>
  );
}
