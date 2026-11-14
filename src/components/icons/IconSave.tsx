interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconSave({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M5 4.5h11.6L19.5 7.4V19a.6.6 0 0 1-.6.6H5a.6.6 0 0 1-.6-.6V5.1c0-.33.27-.6.6-.6Z" />
      <path d="M7.6 4.5V9.5h7.3V4.5" />
      <path d="M8.4 14h7.2v5.6H8.4Z" />
    </svg>
  );
}
