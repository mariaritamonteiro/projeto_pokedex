import axios from "axios";
import { useEffect, useState } from "react";
import { ImgPokemons, ContainerCards, ButtonBlue, ButtonOrange, ButtonDetail } from "./PokemonsCardStyles";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import botao from "../../assets/BotãoDetalhes.png"
import BotaoExcluir from "../../assets/BotãoExcluir.png"
import BotãoCapturar from "../../assets/BotãoCapturar.png"
import bug from "../../assets/ImagensPoderes/Bug.png"
import fire from "../../assets/ImagensPoderes/Fire.png"
import flaying from "../../assets/ImagensPoderes/Flying.png"
import grass from "../../assets/ImagensPoderes/Grass.png"
import normal from "../../assets/ImagensPoderes/Normal.png"
import poison from "../../assets/ImagensPoderes/Poison.png"
import water from "../../assets/ImagensPoderes/Water.png" 

function PokemonCard(props) {
    const navigate = useNavigate()
    const { name, url } = props.pokemon
    
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [type1, setType1] = useState("")
    const [type2, setType2] = useState("")

    const CorFundo = (typeOfPokemon) => {
        switch (typeOfPokemon) {
            case "bug":
                return "#76A866";
            case "fire":
                return "#EAAB7D";
            case "grass":
                return "#729F92";
            case "normal":
                return "#BF9762";
            case "water":
                return "#71C3FF";
            default:
                return "#FFFFFF"
        }
    }

    const imageType = (imagebyTypeOfPokemon) => {
        switch (imagebyTypeOfPokemon) {
            case "bug":
                return bug
            case "fire":
                return fire
            case "flying":
                return flaying
            case "grass":
                return grass
            case "normal":
                return normal
            case "poison":
                return poison
            case "water":
                return water
            default:
                break;
        }
    } 

    async function InfsDetalhes() {
        try {
            const response = await axios.get(url)

            setImage({img: response.data.sprites.other["official-artwork"].front_default })

            setId(response.data.id)

            setType1({name: response.data.types[0]?.type.name })

            setType2({ name: response.data.types[1]?.type.name })

        } catch (error) {
            console.log(error.response);
        }

    }
    useEffect(() => {
        InfsDetalhes()
    }, [name])

    const detailPage = ()=>{
        props.setDetail(props.pokemon)
        goToDetailPage(navigate)
        
    }
   
    return (
        <>
            <ContainerCards color={CorFundo(type1.name)}>
                <h2>#{id}</h2>
                <h3>{name}</h3>
                <>
                <img src={imageType(type1.name)} alt=""/>
                {type2.name && <img src={imageType(type2?.name)} alt=""/>}
                </>
                <ImgPokemons src={image?.img} alt="Imagens Cards" />
                <ButtonDetail src={botao} onClick={() => detailPage()}/>
                {props.btn === 'capture' &&
                    <ButtonBlue src={BotãoCapturar} onClick={() => props.capture(props.pokemon)}/>
                }
                {props.btn === 'excluir' &&
                    <ButtonOrange  src={BotaoExcluir} onClick={() => props.excluir(props.pokemon)}/>
                }

            </ContainerCards>
        </>

    )


}

export default PokemonCard