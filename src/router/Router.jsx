import { BrowserRouter, Routes, Route} from "react-router-dom";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailpage/PokemonDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { useState } from "react";


export default function Router() {
   
  const [detail, setDetail]= useState([])

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage setDetail={setDetail} />} />
        <Route path="/pokedex" element={<PokedexPage setDetail={setDetail}/>} />
        <Route path="/detalhes" element={<PokemonDetailPage detail={detail} />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

    </BrowserRouter>
  )
}