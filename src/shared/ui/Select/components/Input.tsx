import { forwardRef, type ComponentPropsWithoutRef } from "react";
import style from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  function Input(props, ref) {
    const { disabled = false, defaultValue = "", onClick, ...rest } = props;
    return (
      <input
        ref={ref}
        readOnly
        className={style["select_input"]}
        disabled={disabled}
        onClick={onClick}
        value={defaultValue}
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
        type="text"
        {...rest}
      />
    );
  },
);

export default Input;
