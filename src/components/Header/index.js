import { Link } from "react-router-dom";

import './style.css'

function Header(){
    return(
        <div className="header">
            
            <Link className="logo" to={'/'}>Prime Flix</Link>

            <Link className="favoritos" to={'/favoritos'}>Meus filmes</Link>
        </div>
    );
}

export default Header;