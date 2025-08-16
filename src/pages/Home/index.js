import { useEffect, useState } from "react";
import api from "../../services/api"
import { Link } from "react-router-dom";
import './home.css'

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadApi(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "6a0d6ea36b46575a3dd561255bb7b207",
                    language: "pt-BR",
                    page: 1
                }
                
                

            },
            
        )
        
        setFilmes(response.data.results.slice(0,10))
        setLoading(false)
    }

        

        loadApi();
    },[]);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((item)=>{
                    return(
                        <article key={item.id}>
                            <strong>{item.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={filmes.title}/>
                            <Link to={`/filme/${item.id}`}>Acessar</Link> 
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;