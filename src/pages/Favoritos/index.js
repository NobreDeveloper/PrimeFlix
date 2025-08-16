import { useEffect, useState } from "react";
import "./favoritos.css"
import { Link } from "react-router-dom";

function Favorito(){

    const [filme, setFilme] = useState([]);

    useEffect(()=> {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilme(JSON.parse(minhaLista) || [])


    }, [])

    function excluirFilme(id){
        let filtro = filme.filter((item)=>{
            return (item.id !== id)
        });

        setFilme(filtro);
        localStorage.setItem("@primeflix", JSON.stringify(filtro))
    }

    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>

            { filme.length === 0 && <span>Você não possui itens salvos :( </span>}

            <ul>
                {filme.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhe</Link>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favorito;