import styled  from "styled-components";



export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    background-color: var(--yellow);


`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 0;
    width: 90%;
    max-width: 1444px;

    p {
        color: #fff;
        font-size: 2rem;

        @media(max-width: 720px) {
            text-align: center;
        }
    }
    form {
        display: flex;
        gap: 2rem;
        @media(max-width: 720px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        input {
            width: 19rem;
            height: 2.5rem;
            padding: 0 1rem;
            border: none;
            border-radius: 1rem;

            &::placeholder {
                font-size: 1.1rem;
                font-weight: 400;
                
            }
        }

        button {
            padding: 0rem 2.1rem;
            height: 2.5rem;
            font-size: 1.2rem;
            border: none;
            border-radius: 1rem;
            background-color: var(--darker-purple);
            text-transform: uppercase;
            color: #fff;

            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }
        }

        
    }
`