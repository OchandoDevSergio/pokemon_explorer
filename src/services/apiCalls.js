import axios from 'axios';

export const bringPokemons = async () => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
}

export const bringPokemonData = async (url) => {
    return await axios.get(`${url}`);
}

export const bringMealData = async () => {
    return await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
}

export const searchCriteria = async (criteria) => {

    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${criteria}/`);
    console.log("soy criteria", criteria)
  };