import styled from "styled-components";
import { devices } from "../../styles/media"

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.FG_100};
    margin: 0 auto;
    margin-top: 15.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 42.6rem;
    justify-items: start;

    @media (${devices.desktop}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 100%;
        margin-top: 9.012rem;
        padding: 9.012rem auto 10.8rem 15.3rem;
    }
`;

export const Header = styled.div`
    display: flex;
    width: 31.6rem;
    align-items: center;

    img {
        margin-right: 1rem;
        width: 4.3rem;
    }

    h1 {
        font-weight: 700;
        font-size: 3.7rem;
    }

    @media (${devices.desktop}) {
        margin-left: 15.3rem;
        height: 300px;
    }
`;

export const Form = styled.form`
    margin-top: 7.3rem;
    width: 31.6rem;
    display: flex;
    flex-direction: column;

    button {
        margin-bottom: 4.4rem;
        width: 100%;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.COLORS.FG_100};
        font-family: "Poppins", serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }

    a {
        text-align: center;
    }

    h2 {
        display: none;
    }

    @media (${devices.desktop}) {
        background-color: ${({ theme }) => theme.COLORS.BG_700};
        padding: 6.4rem;
        border-radius: 1.6rem;
        width: 47.6rem;
        margin-right: 10.8rem;

        h2 {
            height: 6.87rem;
            text-align: center;
            font-family: 'poppins', sans-serif;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 4.48rem;
            display: initial;
            margin-bottom: 3.2rem;
        }
    }
`;
