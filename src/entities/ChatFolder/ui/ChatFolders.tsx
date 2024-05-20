import { ArrowDownSolid, FolderSolid } from "src/shared";
import style from "./ChatFolders.module.scss";

export default function ChatFolders({ children }: Props) {
  return (
    <>
      <button className={style["list__folders"]}>
        <ArrowDownSolid />
        <FolderSolid />
        <span className={style["folders__text"]}>Все чаты</span>
      </button>
      <div className={style["list__lists"]}>{children}</div>
    </>
  );
}

type Props = {
  children: React.ReactNode;
};
