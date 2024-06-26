import { Button, VoiceSolid } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonVoice({}: Props) {
  return (
    <Button
      className={clsx(style["button-bubble"], style["button-bubble--radius"], style["button--bg-gray"],)}
    >
      <VoiceSolid />
    </Button>
  );
}

type Props = {};
