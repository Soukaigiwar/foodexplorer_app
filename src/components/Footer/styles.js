import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    grid-area: footer;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem;
    width: 100%;
    bottom: 0;


    background-color: ${({ theme }) => theme.COLORS.BG_700};
    
    > span {
        text-align: right;
        font-family: "DM Sans";
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    @media (${devices.desktop}) {
        justify-content: space-around;
        img {
            margin-left: 12.3rem;

        }

        span {
            margin-right: 12.3rem;
            font-size: 1.4rem;
        }
    }
`;

export const BwBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
        margin-right: 1rem;
        width: 3rem;
    }

    h2 {
        font-family: "Roboto";
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.FG_700};
    }
`;
