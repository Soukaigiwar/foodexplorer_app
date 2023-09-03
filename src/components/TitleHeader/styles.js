import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    /* width: auto; */
    height: 12rem;
    position: relative;
    top: 0;
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    border-radius: 3px;
    
    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRADIENTS_200} 0%, ${({ theme }) => theme.COLORS.GRADIENTS_100} 100%);

    > div {
        bottom: 0;
        left: -3rem;
        width: 19rem;
        height: 14.9rem;
        position: absolute;
        
        > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 19rem;
            height: 14.9rem;
        }
    }

    .text {
        left: 18.3rem;
        top: 6.5rem;
        width: 21.5rem;
        position: absolute;

        > h2 {
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 2.5rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
        
        > p {
            width: 100%;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.68rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
    }
    
    @media (${devices.desktop}) {
        margin: 16.4rem 12.4rem 6.2rem;
        height: 26rem;
        
        > div {
            bottom: 0;
            left: -5.4rem;
            
            width: 19rem;
            height: 14.9rem;
            position: absolute;
        
            > img {
                position: absolute;
                top: -25.7rem;
                left: 0;
                width: 63.2rem;
                height: 40.6rem;
            }
        }

        .text {
        left: 62.2rem;
        top: -3rem;
        width: 42.2rem;
        position: absolute;

        > h2 {
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 5.6rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
        
        > p {
            width: 100%;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
    }
    }
`;
