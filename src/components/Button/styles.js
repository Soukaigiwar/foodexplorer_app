import styled from "styled-components";

export const Container = styled.button`
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

    > img {
        width: 2.1rem;
        height: 2.1rem;
        margin-right: 0.5rem;
    }
`;
