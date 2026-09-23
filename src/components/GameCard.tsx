import '../App.css'
import { useNavigate } from 'react-router-dom';


function GameCard({game} : any){

  const navigate = useNavigate();
   


    return(
        <>
 
      <div key={game.id} onClick={() =>navigate(`/game/${game.id}`)} className='gameCard'>
        <img src={game.background_image} alt={game.name} className='cardImg' />
        <h2 className='cardName'>{game.name}</h2>
        <p className='cardRating'>{game.rating}</p>
        <p className='cardRelease'>{game.released}</p>
      </div>
    
   </>
    )
}

export default GameCard;