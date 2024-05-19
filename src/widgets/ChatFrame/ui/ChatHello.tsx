import style from "./ChatFrame.module.scss";

export default function ChatHello() {
  return (
    <div className={style["frame__main__hello"]}>
      <img width={60} height={100} src="./logo.svg" alt="Logo"></img>
      <span className={style["frame__main__text"]}>
        Добро пожаловать! Я - nevi.ai Чем я могу помочь сегодня?
      </span>
    </div>
  );
}
