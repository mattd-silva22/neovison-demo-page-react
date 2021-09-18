import { Container, Content } from "./styles";


export function Functionalities() {

    const iconWidth = '48px'
    const iconHeight = iconWidth
    const iconColor = '#f99734'
    return (
        <Container>
            <Content>
                <main>
                    <h1>Neovison</h1>

                    <p>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria
                        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                        quando um impressor desconhecido pegou uma bandeja de tipos e os
                        embaralhou para fazer um livro de modelos de tipos.
                    </p>

                    <p>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria
                        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                        quando um impressor desconhecido pegou uma bandeja de tipos e os
                        embaralhou para fazer um livro de modelos de tipos.
                    </p>

                </main>

                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} fill={iconColor} className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg> 

                        <span>Funcionalidade 1</span>
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} fill={iconColor} className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>

                        <span>Funcionalidade 2</span>
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} fill={iconColor} className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg> 

                        <span>Funcionalidade 3</span>
                    </li>
                </ul>
            </Content>
        </Container>
    )



}


