import { create } from "zustand";

export const navStore = create(() => ({
  handleNav: (e, scrollToRef) => {
    if (e.type === "click") {
      e?.preventDefault();
    }
    const scrollOptions = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    };
    const offset = 64; // Set the offset to 64 pixels less than the default scroll

    // Adjust the top offset based on whether it's positive or negative
    scrollOptions.block = scrollOptions.block === "end" ? "end" : "start";
    scrollOptions.top = scrollOptions.top
      ? scrollOptions.top - offset
      : -offset;

    scrollToRef?.current?.scrollIntoView(scrollOptions);
  },
}));
