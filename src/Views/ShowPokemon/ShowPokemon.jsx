import './ShowPokemon.css';
import { pokemonDataCheck } from "../pokemonSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { bringPokemonData } from '../../services/apiCalls';

export const ShowPokemon = () => {
    const reduxPokemonData = useSelector(pokemonDataCheck);
    console.log("soy reduxPokemonData", reduxPokemonData)
    const [pokemonUrl, setPokemonUrl] = useState();
    const [pokemonData, setPokemonData] = useState({
        nombre:  "",
        habilidades:  [],
        imagen:  "",
        hpBase:  "",
        AttackBase:  "",
        defenseBase:  "",
        specialAttackBase:  "",
        specialDefenseBase: "",
        Speed:  ""
      });

    const [habilidades] = useState([]);

    const seterHandler = (value, stat) => {
        setPokemonData((prevState) => ({
        ...prevState,
        [stat]: value,
      }));
    };

    useEffect(() => {
        setPokemonUrl(reduxPokemonData.pokemonData.url);
      });
     console.log("soy pokemonUrl", pokemonUrl);

    useEffect(() => {
     bringPokemonData(pokemonUrl)
      .then(
         resultado => {
            for (let i=0; i < resultado.data.abilities.length; i++) {
               habilidades.push(resultado.data.abilities[i].ability.name)
               console.log("soy habilidades", habilidades)
            }
            //  console.log("soy pokemonData", pokemonData)
            //  console.log("soy resultado", resultado)
         }
      )
      .catch(error => console.log(error));
    });

    return (
        <>showpokemon</>
    )
}