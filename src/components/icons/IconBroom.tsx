interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IconBroom({ size = 20, className = '', color = 'currentColor' }: IconProps) {
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
      <path d="M19 3.5 11.5 11" />
      <path d="M9.4 13.1 4.8 17.7" />
      <path d="M11.5 11 9.4 13.1c-1.9-.2-3.7.6-4.9 1.9 1.7.9 3.7 1.1 5.5.5l2.3-2.3" />
      <path d="M9 15.6c-.5 1.6-.4 3.3.3 4.9 1.5-.8 2.6-2.1 3.1-3.7" />
    </svg>
  );
}
