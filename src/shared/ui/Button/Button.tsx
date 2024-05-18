import {
  forwardRef,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from "react";
import style from "./Button.module.css";
import clsx from "clsx";

const Button = forwardRef<HTMLButtonElement, Props>(
  function Button(props, ref) {
    const { children, className, variants = "primary", ...rest } = props;

    return (
      <button
        ref={ref}
        {...rest}
        className={clsx(style.button, style[`button--${variants}`], className)}
      >
        {children}
      </button>
    );
  },
);

export default Button;

type Props = {
  children: string | ReactNode;
  variants?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;
