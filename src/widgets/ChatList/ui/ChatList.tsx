import { AddChatFolderSolid, AddChatSolid } from "src/shared";
import { ChatFolders } from "src/entities/ChatFolder";
import ChatEmptyList from "./ChatEmptyList";
import style from "./ChatList.module.scss";

type Props = {
  folders: string[];
};

export default function ChatList({ folders }: Props) {
  return (
    <>
      <div className={style["chat-list__list"]}>
        <div className={style["list__actions"]}>
          <AddChatSolid style={{ cursor: "pointer" }} />
          <AddChatFolderSolid
            style={{ cursor: "pointer", marginLeft: "20px" }}
          />
        </div>
        <ChatFolders>
          <div></div>
        </ChatFolders>
      </div>
      {folders.length !== 0 ? <div></div> : <ChatEmptyList />}
    </>
  );
}
