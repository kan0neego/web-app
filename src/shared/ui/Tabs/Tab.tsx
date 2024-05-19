import { useContext } from "react";
import { TabsContext } from "./TabProvider";
import clsx from "clsx";
import style from "./Tab.module.scss";

type Props = {
  value: string;
  label: React.ReactNode | string;
  onClick?: (value: string) => void;
};

export default function Tab(props: Props) {
  const { value, label, onClick } = props;
  const context = useContext(TabsContext);
  const isActive = context === value;

  return (
    <li key={value} className="me-2" role="presentation">
      <button
        id={`${value}-tab`}
        className={clsx(style.tab, isActive && style["tab--active"])}
        data-tabs-target={`#${value}`}
        type="button"
        role="tab"
        aria-controls={value}
        aria-selected={isActive}
        onClick={() => onClick!(value)}
      >
        {label}
      </button>
    </li>
  );
}
