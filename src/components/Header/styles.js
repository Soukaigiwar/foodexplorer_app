import styled from "styled-components";
import { devices } from "../../styles/media"

export const Container = styled.div`

    *{
        /* border: 1px solid red; */
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5.6rem 2.8rem 2.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BG_700};

    @media (${devices.desktop}) {
        padding: 5.6rem 12.3rem 2.4rem;
    }
`;

export const Search = styled.div`
    display: none;

    @media (${devices.desktop}) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;

export const Menu = styled.div`
    @media (${devices.desktop}) {
        display: none;
    }
`;

export const OrderBag = styled.div`
    display: flex;
    align-items: baseline;
    position: relative;

    > span {
        position: absolute;
        top: -50%;
        right: -50%;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        padding: 1.2rem 1.2rem;
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

            button {
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
