
import { useState } from 'react'
import '../App.css';
import GameCard from '../components/GameCard.tsx';



function Home(){

const [search ,setSearch] = useState("");
  const url= `https://api.rawg.io/api/games?search=${search}&key=${import.meta.env.VITE_RAWG_API_KEY}`
  const [games ,setGames] = useState<any[]>([]);
  const [loading ,setLoading] = useState(false);
  const [searched ,setSearched] = useState(false);
  



  const handleKeyDown = (event : any) =>{
    if(event.key === 'Enter' ){
      searchGames();
    }
  };
  
 async function searchGames() {

 
     setLoading(true);
     setSearched(true);
     const response = await fetch(url);
     const data = await response.json();
     setGames(data.results)
  setLoading(false);
  

 }


  return (
   <>
   <h1>home</h1>
   <div>
   <input type="text"  value={search} 
   onChange={(e) => setSearch(e.target.value)}
    className='inputbox' onKeyDown={handleKeyDown}/>
    <button onClick={searchGames} className='inputBtn'>search</button>
   </div>
   {loading && <p>loading...</p>}
   {searched && !loading && games.length===0 && <p>game not found</p>}
   <div className='holderContainer'>
    {games.map((game)=>(
      <GameCard key={game.id} game={game}/>
      
    ))}
   </div>
   </>
  )
}

export default Home;