import { ImageAvatar, LogoutOutline } from "src/shared";
import { ReactComponent as Logo } from "./img/logo.svg";
import clsx from "clsx";
import style from "./Sidebar.module.css";
import { type ReactNode } from "react";

export default function Sidebar({ variants = "primary", menubar }: Props) {
  return (
    <aside className={clsx(style.sidebar, style[`sidebar--${variants}`])}>
      <div className={style["logo-wrapper"]}>
        <Logo />
      </div>
      {menubar}
      <div className={style["sidebar__user-panel"]}>
        <ImageAvatar imageProps={{ width: "36px", height: "36px", src: "./avatar.jpg" }} />
        <LogoutOutline />
      </div>
    </aside>
  );
}

type Props = {
  menubar?: ReactNode;
  variants?: "primary" | "secondary";
};
