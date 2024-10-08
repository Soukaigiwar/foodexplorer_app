import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 104px min-content 1fr min-content;
    grid-template-areas:
        "header"
        "back_text_button"
        "content"
        "footer";

    min-height: 100vh;
    min-width: 42.9rem;

    .image {
        text-align: center;

        img {
            text-align: center;
            margin: 1.6rem auto;
            width: 26.4rem;
        }
    }

    .details {
        padding: 0 5.6rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        max-width: 100vw;

        > h2 {
            font-family: "Poppins";
            font-size: 2.7rem;
            font-style: normal;
            font-weight: 500;
            line-height: 3.78rem;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }

        > p {
            text-align: center;
            font-family: "Poppins";
            font-size: 16.225px;
            font-style: normal;
            font-weight: 400;
            line-height: 2.27rem;
            color: ${({ theme }) => theme.COLORS.FG_300};

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        > .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            width: 100%;
        }

        margin-bottom: 5rem;
    }

    .actions {
        display: flex;
        justify-content: space-around;

        max-width: 100vw;
        height: 3.8rem;
        gap: 1.6rem;

        > div {
            display: inline-flex;
            align-items: center;
            gap: 1.6rem;
            font-family: "Roboto";
            font-size: 2.2rem;
            font-weight: 700;
            height: 3.8rem;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }

        > button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15.4rem;
            height: 3.8rem;
            font-size: 0.94rem;
            font-weight: 500;
            line-height: 1.6rem;
            cursor: pointer;
        }
    }

    @media (${devices.desktop}) {
        grid-template-rows: 104px min-content 1fr 77px;

        .dish {
            padding: 0 12.2rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-top: 4.2rem;
        }

        .image img {
            justify-content: center;
            margin: 0;
            padding: 0;
            width: 39rem;
        }

        .details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 0;
            padding-right: 4.78rem;

            p {
                text-align: start;
            }

            .tags {
                justify-content: start;
            }
        }

        .actions {
            justify-content: flex-start;

            > div > button {
                width: 15.4rem;
                height: 3.8rem;
            }
        }
    }
`;

export const Content = styled.div`
    grid-area: content;
    margin: 0 auto;

    @media (${devices.desktop}) {
        width: 112rem;
    }
`;

export const BackTextButton = styled.div`
    grid-area: back_text_button;
`;
