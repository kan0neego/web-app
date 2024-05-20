import { Button, SettingSolid } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonMicro({}: Props) {
  return (
    <Button
      className={clsx(
        style["button-bubble"],
        style["button-bubble--radius"],
        style["button--bg-gray"],
      )}
    >
      <SettingSolid />
    </Button>
  );
}

type Props = {};
