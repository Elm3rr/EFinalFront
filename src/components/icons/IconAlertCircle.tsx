interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconAlertCircle({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M12 7.8v5" />
      <circle cx="12" cy="16.1" r="0.15" fill={color} stroke={color} strokeWidth={2.2} />
    </svg>
  );
}
