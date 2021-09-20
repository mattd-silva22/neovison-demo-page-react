import styled from "styled-components";
import waveBackground from "../../assets/wave.svg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--light-purple);
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1444px;
    padding: 2.5rem 0;
    

    ul {
        margin: 4.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        color: #fff;
        

        @media(max-width: 720px) {
            align-items: center;
        }
        

        li {
            display: flex;
            align-items: center;
            span {
                margin-left: 1rem;
                font-size: 2rem;
            }
        }
    }
`


