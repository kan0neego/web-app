import { ButtonPluse } from "src/entities/Button";
import { CoinsOutline, Tab, TabPanel, TabSwitcher } from "src/shared";
import { ChatList } from "src/widgets/ChatList";
import style from "./Chat.module.css";

export default function Chat() {
  return (
    <main className={style.chat}>
      <header className={style["chat__header"]}>
        <h1 className={style["chat__header__title"]}>Чат</h1>
        <div className={style["chat__header__money"]}>
          <CoinsOutline />
          <span className={style["money__sum"]}>30</span>
          <ButtonPluse className={style["money__button"]} />
        </div>
      </header>
      <section className={style["chat__main"]}>
        <div className={style["main__list"]}>
          <TabSwitcher
            defaultTab="list"
            ListComponent={
              <>
                <Tab value="list" label="Список" />
                <Tab value="archive" label="Архив" />
              </>
            }
            PanelComponent={
              <>
                <TabPanel value="list">
                  <ChatList folders={[]} />
                </TabPanel>
                <TabPanel value="archive">
                  <div>Архив</div>
                </TabPanel>
              </>
            }
          />
        </div>
        <div className={style["main__frame"]}>chat-frame</div>
      </section>
    </main>
  );
}
