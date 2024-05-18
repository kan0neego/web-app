import { Chat } from "src/pages/Chat";
import { Sidebar } from "src/widgets/Sidebar";
import { Menubar } from "src/widgets/Menu";
import styleMenubar from "./Menubar.module.css";
import "./App.css";
import "normalize.css";

export default function App() {
  return (
    <>
      <Sidebar menubar={<Menubar />} />
      <Menubar className={styleMenubar["app__menubar"]} />
      <Chat />
    </>
  );
}
