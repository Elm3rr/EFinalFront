interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconBox({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M12 3.5 20.5 8v8L12 20.5 3.5 16V8Z" />
      <path d="M3.5 8 12 12.3 20.5 8" />
      <path d="M12 12.3v8.2" />
      <path d="M8 5.7 16.5 10.2" />
    </svg>
  );
}
