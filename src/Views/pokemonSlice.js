import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonData: {},
  },
  reducers: {
    loadPokemonData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadPokemonData } = pokemonSlice.actions;

export const pokemonDataCheck = (state) => state.pokemon;

export default pokemonSlice.reducer;
