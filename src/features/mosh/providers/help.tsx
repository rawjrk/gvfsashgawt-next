"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type MoshHelpModalContextType = {
  show: boolean;
  open: () => void;
  close: () => void;
};

const MoshHelpModalContext = createContext<MoshHelpModalContextType | null>(
  null,
);

/** @deprecated */
export const MoshHelpModalProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramValue = searchParams.get("help");

    if (paramValue !== null) {
      setShow(paramValue === "true");
      searchParams.delete("help");

      const pathname = window.location.origin + window.location.pathname;
      const query = searchParams.toString();
      const newUrl = query ? `${pathname}?${query}` : pathname;

      window.history.replaceState(null, "", newUrl);
    }
  }, []);

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
