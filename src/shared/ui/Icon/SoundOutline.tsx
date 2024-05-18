import { type CSSProperties } from "react";

export default function SoundOutline({ style }: Props) {
  return (
    <svg
      style={{ width: "1.3rem", height: "1.3rem", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.00024L12 21.0003"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M16.5 6.37509L16.5 17.6251"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M7.5 6.37509L7.5 17.6251"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M21 10.8754L21 13.1254"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
      />
      <path
        d="M3 10.8754L3 13.1254"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
