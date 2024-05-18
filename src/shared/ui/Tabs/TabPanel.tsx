import { Fragment, ReactElement, useContext } from "react";
import { TabsContext } from "./TabProvider";

type Props = {
  value: string;
  children: ReactElement;
};

export default function TabPanel({ value, children }: Props) {
  const context = useContext(TabsContext);

  return (
    <Fragment>{context === value ? children : <></>}</Fragment>
  );
}
