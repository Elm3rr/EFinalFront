interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconCalendar({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <rect x="3.5" y="5.2" width="17" height="15.3" rx="2" />
      <path d="M3.5 9.8h17" />
      <path d="M8 3.2v3.6" />
      <path d="M16 3.2v3.6" />
      <path d="M7.6 13.4h2.2" />
      <path d="M11.9 13.4h2.2" />
      <path d="M16.2 13.4h2.2" />
      <path d="M7.6 16.9h2.2" />
      <path d="M11.9 16.9h2.2" />
    </svg>
  );
}
