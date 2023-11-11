import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home"; 
import { ShowPokemon } from "../ShowPokemon/ShowPokemon";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<ShowPokemon />} />
      </Routes>
    </>
  );
};