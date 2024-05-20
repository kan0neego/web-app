import {
  ButtonDock,
  ButtonMicro,
  ButtonNote,
  ButtonSetting,
  ButtonVoice,
} from "src/entities/Button";
import ChatHello from "./ChatHello";
import { ChatInput } from "src/features/ChatInput";
import { AddSolid, MenuItem, Select } from "src/shared";
import style from "./ChatFrame.module.scss";

export default function ChatFrame({}: Props) {
  return (
    <>
      <header className={style["frame__header"]}>
        <Select defaultValue={"GPT4"} onChange={(value) => console.log(value)}>
          <MenuItem value={"GPT4"}>GPT4 Turbo</MenuItem>
          <MenuItem value={"DONT RUSS"}>Что-то на нерусском</MenuItem>
        </Select>
        <Select
          defaultValue={"REICAL"}
          onChange={(value) => console.log(value)}
        >
          <MenuItem value={"REICAL"}>Рейчел</MenuItem>
          <MenuItem value={"MARUSA"}>Маруся</MenuItem>
        </Select>
        <ButtonSetting />
        <ButtonNote />
        <div className={style["frame__header__options"]}>
          <ButtonVoice />
          <ButtonDock />
        </div>
      </header>
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
        <ButtonMicro />
      </footer>
    </>
  );
}

type Props = {};
