import { type CSSProperties } from "react";

export default function SettingSolid({ style }: Props) {
  return (
    <svg
      style={{ color: "white", ...style}}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <circle
        cx="8.99961"
        cy="6.60001"
        r="1.6"
        transform="rotate(180 8.99961 6.60001)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="15.4"
        cy="8.20002"
        r="1.6"
        transform="rotate(180 15.4 8.20002)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="1.6"
        cy="1.6"
        r="1.6"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 4.2002 3.39999)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M9 3.39999L9 0.999994"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15.4004 5L15.4004 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M2.59961 8.60001L2.59961 15.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 15.6L9 10.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15.4004 15.6L15.4004 12.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M2.59961 1L2.59961 1.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
