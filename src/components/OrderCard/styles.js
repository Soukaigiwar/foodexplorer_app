import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    padding: 1.6rem 0;
    gap: 3.4rem;
    align-items: center;
    justify-content: start;

    img {
        width: 100px;
        display: flex;
    }

    > div > div span {
        display: inline;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    @media (${devices.desktop}) {
        display: flex;
        flex-direction: row;
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        padding: 1.6rem 0;
        gap: 1.3rem;
        
        > img {
            width: 7.7rem;
            cursor: pointer;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            p {
                color: ${({ theme }) => theme.COLORS.FG_300};
                cursor: pointer;

                span {
                    margin-left: 1.2rem;
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.FG_300};
                }
            }
        }
    }
`;

export const Price = styled.span`
    display: none;

    @media (${devices.desktop}) {
        display: unset;
    }
`;
