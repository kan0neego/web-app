import { ArrowDownSolid, FolderSolid } from "src/shared";
import style from "./ChatFolders.module.css";

export default function ChatFolders({ children }: Props) {
  return (
    <>
      <div className={style["list__folders"]}>
        <ArrowDownSolid />
        <FolderSolid />
        <span className={style["folders__text"]}>Все чаты</span>
      </div>
      <div className={style["list__lists"]}>{children}</div>
    </>
  );
}

type Props = {
  children: React.ReactNode;
};
