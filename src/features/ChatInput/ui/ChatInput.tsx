import { forwardRef } from "react";
import style from "./ChatInput.module.scss";

const ChatInput = forwardRef<HTMLDivElement, Props>(
  function ChatInput(props, ref) {
    const { onClick } = props;

    return (
      <div
        ref={ref}
        role="textbox"
        className={style["frame__footer__input"]}
        contentEditable={true}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            event.preventDefault();
            onClick();
          }
        }}
      ></div>
    );
  },
);

type Props = {
  onClick: () => void;
};

export default ChatInput;
