import { useContext } from "react";
import  Header  from "../../Componentes/Header/Header";
import PokemonCard from "../../Componentes/PokemonCard/PokemonCards"
import { ContainerList } from "../PokemonListPage/PokemonListPageStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TituloPage } from "../PokemonListPage/PokemonListPageStyled";



function PokedexPage({setDetail}) {

     const context = useContext(GlobalContext)
     const {pokedex, excluir} = context
     

    return (
        <>
        <Header/>
        <TituloPage>Meus pokemons</TituloPage>
        <ContainerList>
           
            {pokedex.map((pokemon, index) =>
                  <PokemonCard key={index} pokemon={pokemon} pokedex={pokedex} btn={'excluir'} excluir={excluir} setDetail={setDetail}/>

          )}
        </ContainerList>
        </>
    )
}

export default PokedexPage