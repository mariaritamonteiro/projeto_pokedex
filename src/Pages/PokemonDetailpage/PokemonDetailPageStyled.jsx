import styled from "styled-components"
import card from "../../assets/fundoCard.png"


export const ContainerDetail = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`
export const ImgDetail = styled.img`
    padding: 30px;
`
export const ContainerCard = styled.div`
    width: 70vw;
    height: 80vh;
    background: #729F92;
    border-radius: 37.8857px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    padding: 40px;

    background-image: url(${card});
    background-repeat: no-repeat;
    background-size: 600px;
    background-position:  right;
    

`

export const Container3= styled.div`
    
    h1{
        color: white
    }
    h2{
        color:black;
    }
 
    img{

        position: absolute;
        left: 950px;
        top: 100px;
    }
   
`
export const CardsImgs = styled.div`
    display: grid;
    row-gap: 10px;    
`

export const Card1 = styled.div`
    background-color: white;
    width: 20vw;
    border-radius: 8px;

    
    
`
export const Card2 = styled.div`
    background-color: white;
    width: 20vw;
    border-radius: 8px;
`
export const Moves = styled.div`
   background-color: white;
   height: 50vh;
   margin-top: 60px;
   border-radius: 8px;
   padding: 15px;
`

export const ContainerState = styled.div`
   background-color: white;
   height: 71vh;
   justify-content: center;
   border-radius: 8px;
   padding: 15px;
   
`



