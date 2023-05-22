import Header from "../../Componentes/Header/Header"
import { ContainerCard } from "./PokemonDetailPageStyled"
import detalhes from "../../assets/nomeDetalhes.png"
import { ImgDetail } from "./PokemonDetailPageStyled"
import { ContainerDetail, Card1, Card2, Container3, CardsImgs, Moves, ContainerState } from "./PokemonDetailPageStyled"

import { useEffect, useState } from "react"
import axios from "axios"

function PokemonDetailPage(props) {

    const { detail } = props
    console.log(props);


    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [oficialImg, setOficialImg] = useState({ img: "" })
    const [frontImg, setFrontImg] = useState({ img: "" })
    const [backImg, setBackImg] = useState({ img: "" })
   

    const leituraPokemons = async () => {
        try {
            const response = await axios.get(detail?.url)
            setId(response.data.id);
            setName(response.data.name);
            setOficialImg({ img: response.data.sprites.other["official-artwork"].front_default });
            setFrontImg({ img: response.data.sprites.front_default });
            setBackImg({ img: response.data.sprites.back_default });
            

        } catch (error) {
            console.log(error.response);
        }

    }
    useEffect(() => {
        leituraPokemons()
    }, [detail])

  

    return (
        <>
            <Header />
            <ImgDetail src={detalhes} />
            <ContainerDetail>

                <ContainerCard>

                    <CardsImgs>
                        <Card1>
                            <img src={frontImg.img} width={200} />
                        </Card1>
                        <Card2>
                            <img src={backImg.img} width={200} />
                        </Card2>
                    </CardsImgs>



                    <ContainerState>
                        <div>
                            <h2>base stats</h2>
                        </div>
                    </ContainerState>


                    <Container3>
                        <div>
                            <h1>#{id}</h1>
                            <h1>{name}</h1>
                            <img src={oficialImg.img} width={250} />
                           
                        </div>

                        <Moves>
                            <h2>moves:</h2>
                        </Moves>
                    </Container3>


                </ContainerCard>
            </ContainerDetail>
        </>
    )
}

export default PokemonDetailPage