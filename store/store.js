import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCocktailStore = create(
  immer((set) => ({
    cocktail: {},
    cocktailData: {},
    alcohol: "",
    status: "idle",
    setStatus: (status) =>
      set((state) => {
        state.status = status;
      }),
    setCocktail: (newCocktail) =>
      set((state) => {
        state.cocktail = newCocktail;
      }),
    setCocktailData: (newCocktailData) =>
      set((state) => {
        state.cocktailData = newCocktailData;
      }),
    resetCocktailData: () =>
      set((state) => {
        state.cocktailData = {};
      }),
    setAlcohol: (newAlcohol) =>
      set((state) => {
        state.alcohol = newAlcohol;
      }),
  }))
);
