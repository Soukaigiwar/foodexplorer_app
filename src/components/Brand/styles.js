import styled from "styled-components";
import { devices } from "../../styles/media"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28.7rem;
    cursor: pointer;

    img {
        margin-right: 0.8rem;
        width: 2.4rem;
    }

    h1 {
        font-family: "Roboto";
        font-size: 2.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.FG_100};
    }

    @media (${devices.desktop}) {
        min-width: 16.0rem;
    }
`;
