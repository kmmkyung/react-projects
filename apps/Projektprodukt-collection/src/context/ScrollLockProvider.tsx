import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Ctx = { isLocked: boolean; lock: () => void; unlock: () => void; };
const ScrollLockCtx = createContext<Ctx | null>(null);

export function ScrollLockProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const isLocked = count > 0;
  const lock = useCallback(() => setCount(c => c + 1), []);
  const unlock = useCallback(() => setCount(c => Math.max(0, c - 1)), []);

  useEffect(() => {
    if (isLocked) {
      const y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("scroll-locked");
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.classList.remove("scroll-locked");
      if (top) window.scrollTo(0, -parseInt(top, 10));
    }
  }, [isLocked]);

  const value = useMemo(() => ({ isLocked, lock, unlock }), [isLocked, lock, unlock]);
  return <ScrollLockCtx.Provider value={value}>{children}</ScrollLockCtx.Provider>;
}

export function useScrollLock() {
  const ctx = useContext(ScrollLockCtx);
  if (!ctx) throw new Error("useScrollLock must be used within ScrollLockProvider");
  return ctx;
}
