import { Button, VideoOutline } from "../../../shared";
import clsx from "clsx";
import style from "./Button.module.css";

export default function ButtonVideo({}: Props) {
  return (
    <Button
      className={clsx(style["button-bubble"], style["button-bubble--radius"])}
    >
      <VideoOutline style={{ width: "20px", height: "20px" }} />
    </Button>
  );
}

type Props = {};
