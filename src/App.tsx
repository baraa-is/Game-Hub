import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx'
import GameDetails from "./pages/GameDetails.tsx";

function App(){
return(
 <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/game/:id" element={<GameDetails/>}/>
 </Routes>
 </BrowserRouter>
 </>
)
}

export default App