"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

import { useConsumeSearchParam } from "@/hooks/use_consume_param";

type MoshHelpModalContextType = {
  show: boolean;
  open: () => void;
  close: () => void;
};

const MoshHelpModalContext = createContext<MoshHelpModalContextType | null>(
  null,
);

export const MoshHelpModalProvider = ({ children }: PropsWithChildren) => {
  const initShow = useConsumeSearchParam("help") === "true";
  const [show, setShow] = useState(initShow);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <MoshHelpModalContext.Provider value={{ show, open, close }}>
      {children}
    </MoshHelpModalContext.Provider>
  );
};

export const useMoshHelpModal = () => {
  const ctx = useContext(MoshHelpModalContext);
  if (!ctx) {
    throw Error("useMoshHelpModal must be used inside MoshHelpModalProvider");
  }
  return ctx;
};
