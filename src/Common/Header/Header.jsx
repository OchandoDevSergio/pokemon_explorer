import './Header.css';
import { useNavigate } from "react-router-dom";


export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header'>
         <div className="homeButton" onClick={() => navigate("/")}></div>
        </div>
    )
}