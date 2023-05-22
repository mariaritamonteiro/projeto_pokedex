import { useContext, useEffect } from "react"
import { useState } from "react"

import PokemonCard from "../../Componentes/PokemonCard/PokemonCards"
import { ContainerList } from "./PokemonListPageStyled"
import { TituloPage } from "./PokemonListPageStyled"
import { GlobalContext } from "../../contexts/GlobalContext"
import  Header  from "../../Componentes/Header/Header"

function PokemonListPage({setDetail}) {

  const context = useContext(GlobalContext)
  const {pokemons,noPokedex,capture,} = context

  
  const [listHome, setListHome]= useState([])
  
  const atualizaLista=()=>{
    const newList = pokemons.filter(pokemon => !noPokedex(pokemon.name))
    setListHome(newList)
   
    
  }
 

  useEffect(()=>{
    atualizaLista()
  },[noPokedex])

 
  return (
    <>
    <Header/>
    <TituloPage>Todos os pokemons</TituloPage>
    <ContainerList>
        {listHome.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon}  btn={'capture'} capture={capture} setDetail={setDetail}/>
        )}
    </ContainerList>
    </>
  )

}

export default PokemonListPage