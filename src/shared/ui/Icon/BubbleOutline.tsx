import { type CSSProperties } from "react";

export default function BubbleOutline({ style }: Props) {
  return (
    <svg
      style={{ width: "1.2rem", height: "1.2rem", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        opacity="0.8"
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 11.4397 1.33805 12.8005 1.93912 14.0072C2.09884 14.3279 2.15201 14.6945 2.05941 15.0406L1.52336 17.044C1.29066 17.9137 2.08631 18.7093 2.95601 18.4766L4.95945 17.9406C5.30554 17.848 5.67209 17.9012 5.99278 18.0609C7.19953 18.6619 8.56029 19 10 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};


