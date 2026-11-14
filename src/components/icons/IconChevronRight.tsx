interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconChevronRight({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M9.5 5 16 12l-6.5 7" />
    </svg>
  );
}
