import { MainHeader } from "../MainHeader";
import { Container, Content } from "./styles";

//import imgs banner 



import bannerImg01 from "../../assets/bannerImg01.png"


export function MainBanner(){
    return (
        <Container>
            <MainHeader/>
            <Content>
                <img src={bannerImg01} alt="" />

                <main>
                    <p>Reconhecimento de imagem com <br/>
                    <span>Inteligência Artificial</span> </p>
                </main>
            </Content>

        </Container>
    )
}