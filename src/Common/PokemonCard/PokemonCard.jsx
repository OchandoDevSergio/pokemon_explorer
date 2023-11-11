
import './PokemonCard.css';

export const PokemonCard = ({id, name, url, pokemon}) => {

    return (
        <div className='cardDesign' onClick={()=>console.log(pokemon)}> 
           {" "} {name}
            </div>
    )
}