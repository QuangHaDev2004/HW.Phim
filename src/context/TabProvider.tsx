"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type TabContextType = {
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
  defaultTabId: string;
};

const TabContext = createContext<TabContextType | null>(null);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within TabProvider");
  }
  return context;
};

export const TabProvider = ({ children, defaultTabId }: Props) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  return (
    <>
      <TabContext.Provider value={{ activeTabId, setActiveTabId }}>
        {children}
      </TabContext.Provider>
    </>
  );
};
