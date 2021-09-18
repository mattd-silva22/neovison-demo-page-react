import { MainHeader } from "../MainHeader";
import { Container, Content } from "./styles";



export function MainBanner(){
    return (
        <Container>
            <MainHeader/>
            <Content>
                <div>
                    texto aqui
                </div>

                <main>
                    <p>Reconhecimento de imagem com <br/>
                    <span>Inteligência Artificial</span> </p>
                </main>
            </Content>

        </Container>
    )
}