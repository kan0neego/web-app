import { Button, SoundOutline } from "../../../shared";
import clsx from "clsx";
import style from "./Button.module.scss";

export default function ButtonSound({}: Props) {
  return (
    <Button
      className={clsx(style["button-bubble"], style["button-bubble--radius"])}
    >
      <SoundOutline style={{ width: "20px", height: "20px" }} />
    </Button>
  );
}

type Props = {};
