
import {useEffect, useState} from 'react';
import { PokemonCard } from '../../Common/PokemonCard/PokemonCard';
import { bringPokemons } from '../../services/apiCalls';
import { searchCriteria } from '../../services/apiCalls';
import { Input } from '../../Common/Input/Input';
import './Home.css';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [criteria, setCriteria] = useState("");

    // useEffect(()=>{

    //     if(pokemons.length === 0){
    //       bringPokemons()
    //             .then(
    //                 resultado => {
    //                     console.log("soy resultado", resultado)
    //                     setPokemons(resultado.data.results);
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     } else {
    //         console.log(pokemons);
    //     }
    // },[pokemons]);

    const inputHandler = (e) => {
        setCriteria(e.target.value);
      };
    
    useEffect(() => {
      if (criteria !== "") {
        const search = setTimeout(() => {
          searchCriteria(criteria)
            .then((resultado) => {
                console.log("Soy resultado de searchCriteria", resultado)
              setPokemons(resultado);
              })
            .catch((error) => console.log(error));
          }, 375);
    
        return () => clearTimeout(search);
        } else if (criteria === "") {
          bringPokemons()
            .then((resultado) => {
              setPokemons(resultado.data.results);
            })
            .catch((error) => console.log(error));
        }
      }, [criteria]);    

    console.log("soy pokemons", pokemons)

    return (
        <>      
        <div className="subHeader">
        <Input
          type={"text"}
          placeholder="Busca pokemon por su nombre"
          value={criteria}
          name={"criteria"}
          className="defaultInput"
          manejadora={inputHandler}
        />
      </div>
            {pokemons.length > 0 

                ? (
                <div className='homeDesign'>
                  <div className="infinite-scroll-container">
                     {pokemons.map(
                        pokemon => {
                            // console.log(pokemon)
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