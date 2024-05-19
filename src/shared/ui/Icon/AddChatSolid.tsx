import { type CSSProperties } from "react";

export default function ArrowDownSolid({ style }: Props) {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 11.5997 0.375616 13.1116 1.04346 14.4525C1.22094 14.8088 1.28001 15.2161 1.17712 15.6006L0.581511 17.8267C0.322954 18.793 1.20701 19.677 2.17335 19.4185L4.39939 18.8229C4.78393 18.72 5.19121 18.7791 5.54753 18.9565C6.88836 19.6244 8.40032 20 10 20Z"
        fill="white"
      />
      <path
        d="M7.50049 10H10.0005M10.0005 10H12.5005M10.0005 10V12.5M10.0005 10V7.5"
        stroke="#1B1B1C"
        strokeWidth="0.833333"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
