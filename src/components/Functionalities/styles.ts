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

    border: 1px solid red;

    main {
        width: 50%;
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
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        

        li {
            span {
                margin-left: 1rem;
            }
        }
    }
`