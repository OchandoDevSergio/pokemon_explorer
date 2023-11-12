import axios from 'axios';

export const bringPokemons = async () => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
}

export const bringPokemonData = async (url) => {
    return await axios.get(`${url}`);
}