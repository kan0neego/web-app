import { CSSProperties } from "react";

export default function CoinsOutline({ style }: Props) {
  return (
    <svg
      style={{ width: "1.387rem", height: "1.142rem", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 18"
      fill="none"
    >
      <path
        d="M20.1426 10.1434V13.572C20.1426 15.0577 16.5609 17.0005 12.1426 17.0005C7.72435 17.0005 4.14264 15.0577 4.14264 13.572V10.7148"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.47864 11.0106C5.46721 12.3226 8.52435 13.5535 12.1426 13.5535C16.5609 13.5535 20.1426 11.7181 20.1426 10.1409C20.1426 9.25522 19.0146 8.28493 17.2444 7.60379"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7141 4.42874V7.85731C16.7141 9.34303 13.1324 11.2859 8.71411 11.2859C4.29583 11.2859 0.714111 9.34303 0.714111 7.85731V4.42874"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.71411 7.83913C13.1324 7.83913 16.7141 6.0037 16.7141 4.42656C16.7141 2.84827 13.1324 1.00027 8.71411 1.00027C4.29583 1.00027 0.714111 2.84827 0.714111 4.42656C0.714111 6.0037 4.29583 7.83913 8.71411 7.83913Z"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
   style?: CSSProperties;
}