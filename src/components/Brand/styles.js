import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 28.7rem; */
    /* width: 100%; */
    flex-wrap: nowrap;
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
        position: relative;

        > span {
            font-family: "Roboto";
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            margin-left: 0.8rem;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }


    @media (${devices.desktop}) {
        min-width: 16.0rem;

        h1 {
            position: unset;

            > span {
                position: absolute;
                top: 2rem;
                right: 0;
            }
        }
    }
`;
