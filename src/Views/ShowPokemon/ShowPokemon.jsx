import './ShowPokemon.css';
import { pokemonDataCheck } from "../pokemonSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { bringPokemonData } from '../../services/apiCalls';
import { bringMealData } from '../../services/apiCalls';
import { searchCriteria } from '../../services/apiCalls';
import { Input } from '../../Common/Input/Input';

export const ShowPokemon = () => {
    const reduxPokemonData = useSelector(pokemonDataCheck);
    const [nombre, setNombre] = useState("");
    const [habilidades, setHabilidades] = useState([]);
    const [abilities, setAbilities] = useState();
    const [imagen, setImagen] = useState();
    const [hpBase, setHpBase] = useState();
    const [attackBase, setAttackBase] = useState();
    const [defenseBase, setDefenseBase] = useState();
    const [specialAttackBase, setSpecialAttackBase] = useState();
    const [specialDefenseBase, setSpecialDefenseBase] = useState();
    const [speed, setSpeed] = useState();
    const [meal, setMeal] = useState([]);
    const [mealName, setMealName] = useState();
    const [mealPicture, setMealPicture] = useState();
    const [criteria, setCriteria] = useState("");

    const inputHandler = (e) => {
      setCriteria(e.target.value);
    };

    useEffect(() => {
      if (criteria !== "") {
        const search = setTimeout(() => {
          searchCriteria(criteria)
            .then((resultado) => {
              setHabilidades([" "]);
              console.log("soy habilidades", habilidades)
                for (let i=0; i < resultado.data.abilities.length; i++) {
                  if (habilidades[0] !== resultado.data.abilities[i].ability.name )
                   {habilidades.push(resultado.data.abilities[i].ability.name);
                    habilidades.push(" ");}
                   else {break}
                   setAbilities(habilidades)
                }
                setNombre(resultado.data.name)
                setImagen(resultado.data.sprites.front_default)
                setHpBase(resultado.data.stats[0].base_stat)
                setAttackBase(resultado.data.stats[1].base_stat)
                setDefenseBase(resultado.data.stats[2].base_stat)
                setSpecialAttackBase(resultado.data.stats[3].base_stat)
                setSpecialDefenseBase(resultado.data.stats[4].base_stat)
                setSpeed(resultado.data.stats[5].base_stat)
                  bringMealData()
                   .then(
                      resultado => {
                        console.log("soy resultado", resultado)
                        setMeal(resultado.data.meals)
                        setMealName(resultado.data.meals[0].strMeal)
                        setMealPicture(resultado.data.meals[0].strMealThumb)
                      }
                   )
                   .catch(error => console.log(error));}
              )
            .catch((error) => console.log(error));
          }, 375);
    
        return () => clearTimeout(search);
        }else if ((criteria == "")&&(nombre == "")) {
          bringPokemonData(reduxPokemonData.pokemonData.url)
          .then(
             resultado => {
                for (let i=0; i < resultado.data.abilities.length; i++) {
                  if (habilidades[0] !== resultado.data.abilities[i].ability.name )
                   {habilidades.push(resultado.data.abilities[i].ability.name);
                    habilidades.push(" ");}
                   else {break}
                   setAbilities(habilidades)
                }
                setNombre(resultado.data.name)
                setImagen(resultado.data.sprites.front_default)
                setHpBase(resultado.data.stats[0].base_stat)
                setAttackBase(resultado.data.stats[1].base_stat)
                setDefenseBase(resultado.data.stats[2].base_stat)
                setSpecialAttackBase(resultado.data.stats[3].base_stat)
                setSpecialDefenseBase(resultado.data.stats[4].base_stat)
                setSpeed(resultado.data.stats[5].base_stat)
                if (meal.length === 0){
                  bringMealData()
                   .then(
                      resultado => {
                        console.log("traigo comida", resultado)
                        setMeal(resultado.data.meals)
                        setMealName(resultado.data.meals[0].strMeal)
                        setMealPicture(resultado.data.meals[0].strMealThumb)
                      }
                   )
                   .catch(error => console.log(error));}
             }
          )
          .catch(error => console.log(error));}
      }, [criteria]);  

    return (
        <div className='showPokemon'>
          <div className='pokedex'>
          <div className='leftSide'>
          <Input
          type={"text"}
          placeholder="Busca pokemon por su nombre"
          value={criteria}
          name={"criteria"}
          className="defaultInput"
          manejadora={inputHandler}
          />
            <div className='screenFrame'>
              <img className='screen' src={imagen}></img>
            </div>
          </div>
          <div className='rightSide'>
            <div className='dataDisplay'>
              <div className='data'>Nombre: {nombre}</div>
              <div className='data'>Habilidades: {abilities}</div>
              <div className='data'>HP base: {hpBase}</div>
              <div className='data'>Ataque base: {attackBase}</div>
              <div className='data'>Defensa base: {defenseBase}</div>
              <div className='data'>Ataque especial base: {specialAttackBase}</div>
              <div className='data'>Defensa especial base: {specialDefenseBase}</div>
              <div className='data'>Velocidad: {speed}</div>
              <div className='data'>Comida recomendada: {mealName}</div>
              <img className='mealPic' src={mealPicture}></img>
            </div>
          </div>
          </div>
        </div>
    )
}