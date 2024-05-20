import { Button, MicroSolid } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonMicro({}: Props) {
  return (
    <Button
      className={clsx(
        style["button-micro"],
        style["button-micro--border"],
        style["button-micro--radius"],
        style["button--bg-gray"]
      )}
    >
      <MicroSolid />
    </Button>
  );
}

type Props = {};
