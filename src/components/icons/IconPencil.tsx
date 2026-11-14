interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconPencil({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M15.6 4.6 19.4 8.4 8.6 19.2 4 20l0.8-4.6Z" />
      <path d="M13.8 6.4 17.6 10.2" />
    </svg>
  );
}
