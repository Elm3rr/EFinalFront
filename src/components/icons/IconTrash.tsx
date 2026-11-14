interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconTrash({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M4.5 7h15" />
      <path d="M9.5 7V5.2c0-.6.5-1.1 1.1-1.1h2.8c.6 0 1.1.5 1.1 1.1V7" />
      <path d="M6.7 7 7.5 19.2c.05.7.65 1.3 1.4 1.3h6.2c.75 0 1.35-.6 1.4-1.3L17.3 7" />
      <path d="M10.3 10.8v6" />
      <path d="M13.7 10.8v6" />
    </svg>
  );
}
