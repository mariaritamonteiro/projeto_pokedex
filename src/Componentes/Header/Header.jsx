
import { useLocation, useNavigate } from "react-router-dom"
import { ContainerHeader,ExcluirDetalhes } from "./HeaderStyled"
import { goToPokedex } from "../../router/coordinator"
import { goToListPage } from "../../router/coordinator"
import { ButtonPokedex } from "./HeaderStyled"
import logoPokemon from "../../assets/logoPokemon.png"
import { Button, Img } from "./HeaderStyled"
import BotaoHeader from "../../assets/BotaoHeader.png"
import seta from "../../assets/seta.png"
import Botao from "../../assets/BotãoPokedex.png"
import BotaoExcluir from "../../assets/BotãoExcluirDaPokedex.png"


function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Img src={logoPokemon} id="logo Header" />
            <ButtonPokedex src={Botao} onClick={() => { goToPokedex(navigate) }}/>
            
          </>
        );
      case "/Pokedex":
        return (
          <>
            <Img src={logoPokemon} id="logo Header" />
            <Button onClick={() => {goToListPage(navigate) }}>
              <img src={seta} />  <img src={BotaoHeader} />
            </Button>
            
          </>
        );
      case "/Detalhes":
        return (
          <>
            <Img src={logoPokemon} id="logo Header" />
            <Button onClick={() => {goToListPage(navigate) }}>
              <img src={seta} />  <img src={BotaoHeader} />
            </Button>
            <ExcluirDetalhes src={BotaoExcluir} onClick={() => {goToPokedex(navigate) }}/>
          </>
        );
      default:
        return (
          <>
          <h1>Pagina não encontada</h1>
          </>
        );
    }
  };
  return <ContainerHeader>{renderHeader()}</ContainerHeader>;
}

export default Header






/* 
 if (location.pathname === "/") {
    return (

      <ContainerHeader>
        <Img src={logoPokemon} id="logo Header" />
        <ButtonPokedex onClick={() => { goToPokedex(navigate) }}>Pokedex</ButtonPokedex>
      </ContainerHeader>

    )

  } else if (location.pathname === "Pokedex") {
    return (

      <ContainerHeader>
        <Img src={logoPokemon} id="logo Header" />
        <Button onClick={() => { goToListPage(navigate) }}>
          <img src={seta} />  <img src={BotaoHeader} />
        </Button>
        <ButtonPokedex onClick={() => { goToPokedex(navigate) }}>Pokedex</ButtonPokedex>
      </ContainerHeader>
    )

  } else if (location.pathname === "Detalhes") {
    return (

      <ContainerHeader>
        <Img src={logoPokemon} id="logo Header" />
        <Button onClick={() => { goToListPage(navigate) }}>
          <img src={seta} />  <img src={BotaoHeader} />
        </Button>
        <ButtonPokedex onClick={() => { goToPokedex(navigate) }}>Pokedex</ButtonPokedex>
      </ContainerHeader>

    )
  }
    return (
        <HeaderContainer>
        
           <Img src={logoPokemon} id="logo Header"/>
           <Button onClick={()=>{goToListPage(navigate)}}>
           <img src={seta}/>  <img src={BotaoHeader}/>
           </Button>
           <ButtonPokedex onClick={()=>{goToPokedex(navigate)}}>Pokedex</ButtonPokedex>
           
        </HeaderContainer>
    ) */