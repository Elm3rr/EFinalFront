interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconChevronLeft({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M14.5 5 8 12l6.5 7" />
    </svg>
  );
}
