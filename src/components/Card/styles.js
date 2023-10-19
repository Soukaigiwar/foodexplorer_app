import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    height: 462px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    border-radius: 8px;
    border: 1px solid #000204;
    background: #00070A;

    > img {
        width: 200px;
        height: 200px;
    }

    >h2 {
        color: #E1E1E6;
        text-align: center;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
    }

    > p {
        color: var(--light-light-400, #C4C4CC);
        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }
    
    > h3 {
        color: #82F3FF;
        text-align: center;
        
        font-family: Roboto;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    > .favorite {
        width: 24px;
        position: absolute;
        top: 16px;
        right: 16px;
    }
`