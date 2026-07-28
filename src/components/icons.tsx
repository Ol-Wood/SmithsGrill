import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c.9 3 2.6 4.1 4.1 5.8A7.6 7.6 0 0 1 18.3 13a6.3 6.3 0 1 1-12.6 0c0-2 .9-3.4 2-4.6.3 1 .9 1.8 1.8 2.2.2-3.4 1.3-6 2.5-8.1Z" />
      <path d="M12 21a3 3 0 0 1-1.4-5.7c.4 1 1 1.3 1.4 1.5.4-.9.9-1.7 1.6-2.3A3 3 0 0 1 12 21Z" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 7.5h11.5v9H2z" />
      <path d="M13.5 10.5H18l3 3v3h-7.5z" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
      <path d="M9 17.5h6M2 17.5h1M21 16.5h1" />
    </svg>
  );
}

export function ChefIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 14.5A4 4 0 0 1 6 6.6a4.2 4.2 0 0 1 8-.9 3.8 3.8 0 0 1 3.5 8.8" />
      <path d="M6.5 14.5h11v3.9a1.6 1.6 0 0 1-1.6 1.6H8.1a1.6 1.6 0 0 1-1.6-1.6z" />
      <path d="M9.5 14.5v5M14.5 14.5v5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.3 3h2.6l1.5 3.7-1.9 1.4a11.6 11.6 0 0 0 5.4 5.4l1.4-1.9 3.7 1.5v2.6A2.3 2.3 0 0 1 16.5 18 13.6 13.6 0 0 1 4 5.5 2.3 2.3 0 0 1 6.3 3Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8.5 3.5v4M15.5 3.5v4" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} {...props}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
