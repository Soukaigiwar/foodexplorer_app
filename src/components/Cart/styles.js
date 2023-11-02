import styled from "styled-components";
import { devices } from "../../styles/media"

export const Container = styled.div`
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
