import styled from "styled-components"
import card from "../../assets/fundoCard.png"

export const ContainerCards = styled.div`
    background-color: ${(props)=>{
        return props.color
    }};
    background-image: url(${card});
    background-position: right;
    background-repeat: no-repeat;
    
    height: 30vh;
    width: 30vw;
    position: relative;
    border-radius: 10px;
    padding: 15px;

    h2{
        color: white;
    }
    h3{
        color: white;
    }
`
export const ImgPokemons = styled.img`
    height: 90%;
    width: 35%;
    position: absolute;
    bottom: 20%;
    right: 1%;
   
`
export const ButtonBlue = styled.img`
    height: 5vh;
    width: 6vw;
    border:none;
    border-radius:10px;
    margin-right: 10px;
    position: absolute;
    bottom: 10px;
    right: 0;
`
export const ButtonOrange = styled.img`
    height:4vh;
    width: 7vw;
    border:none;
    position: absolute;
    margin-right: 10px;
    bottom: 8px;
    right: 0;
`
export const ButtonDetail = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom:10px;
    margin-left: 10px;
    border-bottom: 1px solid white ;

`




