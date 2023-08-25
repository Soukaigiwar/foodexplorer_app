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

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 3.2rem;
    }

    label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FG_400};
        margin-bottom: 0.8rem;
    }

    input {
        height: 4.8rem;
        width: 100%;
        padding: 1.2rem 1.4rem;
        border-radius: .8rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BG_900};
        color: ${({ theme }) => theme.COLORS.FG_500};
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 100%;
    }

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
`;
