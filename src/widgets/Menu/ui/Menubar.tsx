import {
  ButtonBubble,
  ButtonImage,
  ButtonSound,
  ButtonVideo,
} from "src/entities/Button";
import { ImageAvatar } from "src/shared";
import style from "./Menubar.module.css";
import clsx from "clsx";

export default function Menubar({ className }: Props) {
  return (
    <div className={clsx(style.menubar, style["menubar--bg"], className)}>
      <ButtonBubble />
      <ButtonImage />
      <ButtonSound />
      <ButtonVideo />
      <div className={style["menubar__user-profile"]}>
        <ImageAvatar
          buttonProps={{ className: style["menubar__user-profile__button"] }}
          imageProps={{ width: "32px", height: "32px", src: "./avatar.jpg" }}
        />
      </div>
    </div>
  );
}

type Props = {
  className?: string;
}