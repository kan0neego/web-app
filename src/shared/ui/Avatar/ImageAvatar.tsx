import { type ComponentPropsWithoutRef } from "react";
import style from "./ImageAvatar.module.css";
import clsx from "clsx";

export default function ImageAvatar({ buttonProps, imageProps }: Props) {
  return (
    <button
      {...buttonProps}
      className={clsx(
        style["button-avatar"],
        style["button-avatar--pink-gradient"],
        buttonProps?.className,
      )}
    >
      <img
        {...imageProps}
        className={clsx(style["button-avatar__img"], imageProps?.className)}
        alt="Аватар пользователя"
      ></img>
    </button>
  );
}

type Props = {
  imageProps?: ComponentPropsWithoutRef<"img">;
  buttonProps?: ComponentPropsWithoutRef<"button">;
};
