import { Button, PlusSolid } from "src/shared";
import clsx from "clsx";
import style from "./Button.module.css";

export default function ButtonPluse({ className }: Props) {
  return (
    <Button
      className={clsx(
        style["button-pluse"],
        style["button-pluse--radius"],
        style["button-pluse--border"],
        className
      )}
    >
      <PlusSolid />
    </Button>
  );
}

type Props = {
   className?: string;
};
