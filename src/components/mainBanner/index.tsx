import { MainHeader } from "../MainHeader";
import { Container, Content } from "./styles";

//import imgs banner 

import menImg from "../../assets/g704.png"
import estanteImg from "../../assets/g72.png"
import boxImg from "../../assets/path638.png"
import cellPhoneImg from "../../assets/g820.png"

import bannerImg01 from "../../assets/bannerImg01.png"


export function MainBanner(){
    return (
        <Container>
            <MainHeader/>
            <Content>
            <img src={bannerImg01} alt="" />
                <div className='bannerImgArea'>
                    
                    <img src={estanteImg} alt="" className='estanteImg' />
                    <img src={menImg} alt=""  className='manImg'/>
                    <img src={boxImg} alt="" className='boxImg' />
                    <img src={cellPhoneImg} alt="" className='cellPhoneImg' />
                    
                </div>

                <main>
                    <p>Reconhecimento de imagem com <br/>
                    <span>Inteligência Artificial</span> </p>
                </main>
            </Content>

        </Container>
    )
}