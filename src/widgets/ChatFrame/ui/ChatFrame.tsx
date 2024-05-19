import ChatHello from "./ChatHello";
import { ChatInput } from "src/features/ChatInput";
import { ButtonVoice } from "src/entities/Button";
import { AddSolid } from "src/shared";
import style from "./ChatFrame.module.scss";

export default function ChatFrame({}: Props) {
  return (
    <>
      <header className={style["frame__header"]}>header</header>
      <main className={style["frame__main"]}>
        <ChatHello />
      </main>
      <footer className={style["frame__footer"]}>
        <div className={style["frame__footer__input-wrapper"]}>
          <AddSolid
            style={{
              position: "absolute",
              left: "40px",
              top: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          />
          <ChatInput onClick={() => {}} />
        </div>
        <ButtonVoice />
      </footer>
    </>
  );
}

type Props = {};
