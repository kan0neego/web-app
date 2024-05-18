import { ChatBubbleOutline } from "src/shared";
import style from "./ChatEmptyList.module.css";

export default function ChatEmptyList() {
  return (
    <div className={style["chat-empty"]}>
      <ChatBubbleOutline />
      <span className={style["chat-empty-list__text"]}>Список чатов пуст</span>
    </div>
  );
}
