import { type CSSProperties } from "react";

export default function ArrowDownSolid({ style }: Props) {
  return (
    <svg
      style={{ color: "var(--main-light-gray-color)", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
    >
      <path
        d="M7.99206 1.3796C8.20173 1.19989 8.22601 0.884237 8.0463 0.674574C7.86658 0.464911 7.55093 0.44063 7.34127 0.620341L7.99206 1.3796ZM4.33333 3.85711L4.00794 4.23674C4.19518 4.39724 4.47148 4.39724 4.65873 4.23674L4.33333 3.85711ZM1.3254 0.620341C1.11573 0.44063 0.800083 0.464911 0.620372 0.674574C0.440661 0.884237 0.464941 1.19989 0.674604 1.3796L1.3254 0.620341ZM7.34127 0.620341L4.00794 3.47748L4.65873 4.23674L7.99206 1.3796L7.34127 0.620341ZM4.65873 3.47748L1.3254 0.620341L0.674604 1.3796L4.00794 4.23674L4.65873 3.47748Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = {
  style?: CSSProperties;
};
