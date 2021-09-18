import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1444px;
    padding: 2.5rem 0;

    

    main {
        width: 50%;
        @media(max-width: 720px) {
            h1 {
                text-align: center;
            }
            width: 100%;
        }
        h1 {
            color: var(--yellow);
            font-weight: 700;
            font-size: 3.5rem;
        }

        p {
            font-size: 1rem;
            margin: 1rem 0;
        }
    }

    ul {
        margin: 4.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;

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