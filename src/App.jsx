import { MainContainer } from "./MainContainer/MainStyled"
import Router from "./router/Router"
import { GlobalStyle } from "./GlobalStyle"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";


function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

  async function pegarNomes() {
    try {
      const response = await axios.get(BASE_URL)
      setPokemons(response.data.results)

    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pegarNomes()
  }, [])

  function capture(pokemon) {
    const newPokedex = [...pokedex, pokemon]
    setPokedex(newPokedex);

  }

  function excluir(pokemon) {
    const newPokedex = pokedex.filter(pokedex => pokedex.name!== pokemon.name)
    setPokedex(newPokedex)
  }

  function noPokedex(nomePokemon) {
    const foundPokemon = pokedex.find(pokemon => pokemon.name === nomePokemon)
    if (foundPokemon) {
      return true
    } else {
      return false
    }
  }

  const dados = {
    noPokedex,
    pokemons,
    setPokemons,
    capture,
    pokedex,
    setPokedex,
    excluir,
   

  }

  return (

    <GlobalContext.Provider value={dados}>
      <MainContainer>
        <GlobalStyle />
        <Router />
      </MainContainer>
    </GlobalContext.Provider>


  )
}

export default App

