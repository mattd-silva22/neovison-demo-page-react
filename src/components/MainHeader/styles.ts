import styled from "styled-components";


export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    



`

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1444px;

   

    h1 {
        height: 6rem;
        padding: 1rem  2.5rem;
        border: 1px solid yellow;
        background-color: var(--light-purple);

        color: #fff;
    }

    nav {
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            list-style: none;

            a {
                color: #fff;
                text-transform: uppercase;
                text-decoration: none;
                font-weight: 700;
                font-size: 1.1rem;
            }
        }
    }

`