import { type CSSProperties } from "react";

export default function DocumentOutline({ style }: Props) {
  return (
    <svg
    style={{ color: "white", ...style}}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 3V6C13 7.65685 14.3431 9 16 9H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 3L19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V6C5 4.34315 6.34315 3 8 3H13Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
