import { Button, VoiceSolid } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonVoice({}: Props) {
  return (
    <Button
      className={clsx(
        style["button-voice"],
        style["button-voice--border"],
        style["button-voice--radius"],
      )}
    >
      <VoiceSolid />
    </Button>
  );
}

type Props = {};
