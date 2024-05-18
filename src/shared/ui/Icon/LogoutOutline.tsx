import { type CSSProperties } from "react";

export default function LogoutOutline({ style }: Props) {
  return (
    <svg
      style={{ width: "1.5rem", height: "1.5rem", color: "white", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 23"
      fill="none"
    >
      <path
        d="M2 16.7704C3.76421 19.6097 6.91135 21.5 10.5 21.5C16.0228 21.5 20.5 17.0228 20.5 11.5C20.5 5.97715 16.0228 1.5 10.5 1.5C6.91135 1.5 3.76421 3.39033 2 6.22958"
        stroke="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"
      />
      <path d="M3.5 9L0 11.5L3.5 14V12.3333H11.5V10.6667H3.5V9Z" fill="currentColor" />
    </svg>
  );
}

type Props = { style?: CSSProperties };