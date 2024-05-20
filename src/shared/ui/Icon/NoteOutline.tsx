import { type CSSProperties } from "react";

export default function NoteOutline({ style }: Props) {
  return (
    <svg
      style={{ color: "white", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.99998 17.5998V6.39981"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M20 17.5998V6.39981"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <rect
        x="6.09961"
        y="4.49982"
        width="11.8"
        height="15.8"
        rx="3.5"
        stroke="currentColor"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
