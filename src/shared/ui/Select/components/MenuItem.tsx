import { forwardRef } from "react";
import style from './MenuItem.module.scss'

type Props = {
  value?: any;
  children: string;
  onClick?: (event: any) => void;
};

export const MenuItem = forwardRef<HTMLLIElement, Props>(function List({ onClick, children }, ref) {
  return (
    <li
      className={style["menu_item"]}
      onClick={(event) => {
        event.stopPropagation();
        if (typeof onClick === "function") onClick(event);
      }}
    >
      {children}
    </li>
  );
});
