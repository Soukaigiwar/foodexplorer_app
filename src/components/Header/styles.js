import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BG_700};

    .content {
        display: flex;
        align-items: center;
        
        > :nth-child(2) {
            width: 100%;
        }
    
        padding: 5.6rem 2.8rem 2.4rem;
        width: 100%;
    
    }

    @media (${devices.desktop}) {
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: space-evenly;
        
        .content {
            width: 112rem;
            padding: 5.6rem 0 2.4rem;
            justify-content: space-between;

        > :nth-child(2) {
            width: unset;
        }
        }
    }
`;

export const Search = styled.div`
    display: none;

    @media (${devices.desktop}) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30rem;
    }
`;

export const MenuIcon = styled.div`
    @media (${devices.desktop}) {
        display: none;
    }
`;

export const Options = styled.div`
    display: none;

    @media (${devices.desktop}) {
        display: flex;
        justify-content: space-between;
        width: 28rem;
        margin-left: 4.2rem;
        margin-right: 3.2rem;
        
    }
`;

export const OrderBag = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 3.8rem;
    height: 3.8rem;
    padding-top: 1.5rem;
    cursor: pointer;

    > button {
        display: flex;
        width: 3.2rem;
        height: 3.2rem;
        
        /* align-items: center; */
        background-color: unset;
    }

    > span {
        position: absolute;
        top: 0.1rem;
        left: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        /* padding: 1.2rem 1.2rem; */
        border-radius: 25px;

        font-family: 'Poppins';
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;

        color: ${({ theme }) => theme.COLORS.FG_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    @media (${devices.desktop}) {
        display: none;
    }
`;

export const OrderButton = styled.div`
        display: none;

        @media (${devices.desktop}) {
            display: flex;

            > button {
                width: 21.6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.4rem;
            }
        }
`;

export const SignOut = styled.div`
    display: none;

    @media (${devices.desktop}) {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 3.2rem;
            cursor: pointer;
    }
`;
