import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background: rgb(125,66,150);
    background: linear-gradient(180deg, rgba(125,66,150,1) 0%, rgba(39,12,50,1) 100%);

`

export const Content = styled.div`
    display: flex;
    width: 90%;
    max-width: 1444px;

    @media(max-width: 720px) {
            flex-direction: column-reverse;
        }

    main {
        padding: 12rem 0rem;
        
        

        @media(max-width: 720px) {
            padding: 2rem 0rem;
            text-align: center;
            
            
        }

        p {
            font-size: 2.1rem;
            color: #fff;
            span {
                font-size: 3.5rem;
                font-weight: 700;
            }
        }
    }
`