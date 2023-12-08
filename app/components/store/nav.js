import { create } from "zustand";

export const navStore = create(() => ({
  handleNav: (e, scrollToRef) => {
    if (e.type === "click") {
      e?.preventDefault();
    }
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  },
}));
