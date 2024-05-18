import { BubbleOutline, Button } from "src/shared";
import clsx from "clsx";
import style from "./Button.module.css";

export default function ButtonBubble({}: Props) {
  return (
    <Button
      className={clsx(style["button-bubble"], style["button-bubble--radius"])}
    >
      <BubbleOutline style={{ width: "20px", height: "20px" }} />
    </Button>
  );
}

type Props = {};
