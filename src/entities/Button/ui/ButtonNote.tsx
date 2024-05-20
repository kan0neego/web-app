import { Button, NoteOutline } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonNote({}: Props) {
  return (
    <Button
      className={clsx(
        style["button-bubble"],
        style["button-bubble--radius"],
        style["button--bg-gray"],
      )}
    >
      <NoteOutline />
    </Button>
  );
}

type Props = {};
