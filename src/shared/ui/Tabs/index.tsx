import React, { useState } from "react";
import TabList from "./TabList";
import TabsProvider from "./TabProvider";

type Props = {
  defaultTab: string;
  ListComponent: React.ReactElement;
  PanelComponent: React.ReactElement;
};

export default function TabSwitcher({ defaultTab, ListComponent, PanelComponent }: Props) {
  const [value, setValue] = useState(defaultTab);

  return (
    <TabsProvider value={value}>
      <TabList onClick={setValue}>{ListComponent}</TabList>
      {PanelComponent}
    </TabsProvider>
  );
}
