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
    justify-content: space-between;
    width: 90%;
    max-width: 1444px;

    @media(max-width: 720px) {
            flex-direction: column;
        }

    .bannerImgArea{
        display: none;
        img.manImg{
            position: relative;
            bottom: 150px;
            left: 185px;
        }

        img.boxImg{
            position: relative;
            bottom: 200px;
            left: 375px;
            transform: scale(1.5);
        }

        img.cellPhoneImg{
            position: relative;
            bottom: 30px;
            left: 265px;
            display: none;
            transform: scale(0.7);
            
        }

        img.estanteImg{
            transform: scale(0.8);
            position: relative;
            bottom: -15px;
            left: 50px;
        }
    }


    main {
        padding: 12rem 0rem;
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