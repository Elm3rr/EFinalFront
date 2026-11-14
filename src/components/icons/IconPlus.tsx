interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconPlus({ size = 20, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5v15" />
      <path d="M4.5 12h15" />
    </svg>
  );
}
