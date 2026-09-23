import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import "../gameDetails.css";

function GameDetails(){
const [game,setGame] = useState<any>(null);
const [loading, setLoading] = useState(false);
const { id } = useParams(); 
useEffect(()=>{
    setLoading(true);
fetch(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`)
.then(res => res.json())
.then(data =>{ 
    setGame(data);
    setLoading(false);
})
},[id]
)
if(loading){
    return(
         <p>loading...</p>
    )
}

    return(
        <>
        
    <img className='gameImage' src={game?.background_image} alt={game?.name}/>
    <p className='gameName'>{game?.name}</p>
    <p className='description'>{game?.description_raw}</p>
    <p className='rating'>{game?.rating}/5 rating</p>
    </>

)
}
export default GameDetails;