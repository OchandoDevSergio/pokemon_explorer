
import {useEffect, useState} from 'react';
import { PokemonCard } from '../../Common/PokemonCard/PokemonCard';
import { bringPokemons } from '../../services/apiCalls';
import './Home.css';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{

        if(pokemons.length === 0){
          bringPokemons()
                .then(
                    resultado => {
                        console.log("soy resultado", resultado)
                        setPokemons(resultado.data.results);
                    }
                )
                .catch(error => console.log(error));
        } else {
            console.log(pokemons);
        }
    },[pokemons]);

    return (
        <>      
            {pokemons.length > 0 

                ? (
                <div className='homeDesign'>
                  <div className="infinite-scroll-container">
                     {pokemons.map(
                        pokemon => {
                             return (
                                 <PokemonCard
                                
                                     //Key es siempre una palabra reservada en React
                                     key={pokemon.id}
                                     ////////////////////////////////
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                    pokemon={pokemon}
                               />
                            )
                        }
                    )}
                </div>
                </div>

                )

                 : (<div> pokemons en camino</div>)
            
            }
        </>
    )
}