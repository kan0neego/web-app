import { Button, DocumentOutline } from "src/shared";
import style from "./Button.module.scss";
import clsx from "clsx";

export default function ButtonDock({}: Props) {
  return (
    <Button
      className={clsx(style["button-bubble"], style["button-bubble--radius"], style["button--bg-gray"],)}
    >
      <DocumentOutline />
    </Button>
  );
}

type Props = {};
