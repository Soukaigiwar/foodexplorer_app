import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.FG_100};
    margin: 0 auto;
    margin-top: 15.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 42.6rem;
    justify-items: start;


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
`;

export const Form = styled.form`
    margin-top: 7.3rem;
    width: 31.6rem;
    display: flex;
    flex-direction: column;

    button {
        width: 100%;
        height: 4.8rem;

        margin-bottom: 4.4rem;

        border: none;
        border-radius: 0.5rem;

        font-family: "Poppins", serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;

        color: ${({ theme }) => theme.COLORS.FG_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    a {
        text-align: center;
    }
`;
