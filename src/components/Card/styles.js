import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`

    height: 32rem;
    width: 21rem;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    position: relative;

    border-radius: 8px;
    border: 1px solid #000204;
    background: #00070A;

    > img {
        width: 8.8rem;
        height: 8.8rem;
    }

    > h2 {
        color: #E1E1E6;
        text-align: center;
        font-family: Poppins;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }

    > p {
        display: none;
    }
    
    > h3 {
        color: #82F3FF;
        text-align: center;
        
        font-family: Roboto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }

    .actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 14px;
    }

    .actions .button {
        width: 162px;
        height: 32px;
    }

    .actions div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 14px;
    }

    .actions div span {
        color: var(--light-light-400, #C4C4CC);
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
    }

    > .favorite {
        width: 24px;
        position: absolute;
        top: 16px;
        right: 16px;
    }

    @media (${devices.desktop}) {
        height: 462px;
        width: 304px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 15px;
        position: relative;

        border-radius: 8px;
        border: 1px solid #000204;
        background: #00070A;

        > img {
            width: 176px;
            height: 176px;
            cursor: pointer;
        }

        > h2 {
            color: #E1E1E6;
            text-align: center;
            font-family: Poppins;
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            cursor: pointer;
        }

        > p {
            display: unset;
            color: var(--light-light-400, #C4C4CC);
            text-align: center;
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            cursor: pointer;
        }
        
        > h3 {
            color: #82F3FF;
            text-align: center;
            
            font-family: Roboto;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            cursor: pointer;
        }

        .actions {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            gap: 16px;
            /* margin-top: 20px; */
        }

        .actions .button {
            width: 92px;
        }

        .actions div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 14px;
        }

        .actions div span {
            color: var(--light-light-400, #C4C4CC);
            font-family: Roboto;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
        }

        > .favorite {
            width: 24px;
            position: absolute;
            top: 16px;
            right: 16px;
        }
    }
`
