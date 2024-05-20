import { type CSSProperties } from "react";

export default function ArrowSolid({ style }: Props) {
  return (
    <svg
      style={Object.assign({ color: "var(--main-light-gray-color)" }, style)}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path
        d="M11.6508 2.61634C12.0701 2.25692 12.1187 1.62562 11.7593 1.2063C11.3998 0.786969 10.7685 0.738408 10.3492 1.09783L11.6508 2.61634ZM6 6.1428L5.34921 6.90206C5.7237 7.22305 6.2763 7.22305 6.65079 6.90206L6 6.1428ZM1.65079 1.09783C1.23147 0.738407 0.600166 0.786969 0.240743 1.20629C-0.118679 1.62562 -0.0701172 2.25692 0.349209 2.61634L1.65079 1.09783ZM10.3492 1.09783L5.34921 5.38354L6.65079 6.90206L11.6508 2.61634L10.3492 1.09783ZM6.65079 5.38354L1.65079 1.09783L0.349209 2.61634L5.34921 6.90206L6.65079 5.38354Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
