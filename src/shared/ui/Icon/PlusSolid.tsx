import { type CSSProperties } from "react";

export default function PlusSolid({ style }: Props) {
  return (
    <svg
      style={{ width: "12px", height: "12px", color: "white", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M11 6.50004C11.2761 6.50004 11.5 6.27618 11.5 6.00004C11.5 5.7239 11.2761 5.50004 11 5.50004V6.50004ZM1 5.50004C0.723858 5.50004 0.5 5.7239 0.5 6.00004C0.5 6.27618 0.723858 6.50004 1 6.50004L1 5.50004ZM6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM5.5 11C5.5 11.2761 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.2761 6.5 11H5.5ZM11 5.50004H6V6.50004H11V5.50004ZM6 5.50004L1 5.50004L1 6.50004L6 6.50004V5.50004ZM5.5 1L5.5 6.00004H6.5L6.5 1L5.5 1ZM5.5 6.00004L5.5 11H6.5L6.5 6.00004H5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
