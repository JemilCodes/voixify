import { create } from "zustand";

const initialState = {
  homeRef: null,
  featuresRef: null,
  pricingRef: null,
};

export const componentsStore = create((set) => ({
  ...initialState,
  setHomeRef: (payload) => {
    set({ homeRef: payload });
  },
  setFeaturesRef: (payload) => {
    set({ featuresRef: payload });
  },
  setPricingRef: (payload) => {
    set({ pricingRef: payload });
  },
}));
