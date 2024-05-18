import { createContext } from "react";

type Props = {
  value: string;
  children: React.ReactNode;
};

export const TabsContext = createContext("");

export default function TabsProvider({ value, children }: Props) {
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}
