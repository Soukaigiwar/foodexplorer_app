import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    grid-area: footer;
    
    background-color: ${({ theme }) => theme.COLORS.BG_700};
    
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        padding: 2.4rem;
        width: 100%;
        bottom: 0;
        
        span {
            text-align: right;
            font-family: "DM Sans";
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
    }

    @media (${devices.desktop}) {
        .content {
            width: 112rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const BwBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        margin-right: 1rem;
        width: 2.2rem;
    }
    
    > h2 {
        font-family: "Roboto";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.FG_700};
    }
    
    @media (${devices.desktop}) {
        > img {
            margin-right: 1rem;
            width: 3rem;
        }

        > h2 {
            font-family: "Roboto";
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: ${({ theme }) => theme.COLORS.FG_700};
        }
    }
`;
