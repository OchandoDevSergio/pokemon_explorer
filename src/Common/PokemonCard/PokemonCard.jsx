
import './PokemonCard.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPokemonData} from "../../Views/pokemonSlice";

export const PokemonCard = ({id, name, url, pokemon}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showPokemon = () => {
        dispatch(loadPokemonData({ pokemonData: pokemon }));
        navigate("/pokemon");
      };

    return (
        <div className='cardDesign' onClick={() => showPokemon(pokemon)}> 
           {" "} {name}
            </div>
    )
}