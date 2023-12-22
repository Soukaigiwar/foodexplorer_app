import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 104px min-content 1fr 77px;
    grid-template-areas: 
        "header"
        "back_text_button"
        "form"
        "footer";

    height: 100vh;

    .backTextButton{
        img {
            width: 2.2rem;
        }
        span {
            display: flex;
            align-items: center;
            padding-top: 1.1rem;
            padding-left: 3.2rem;
            font-size: 1.6rem;
        }
    }

@media (${devices.desktop}) {
    
}
`;

export const Form = styled.form`
    grid-area: form;
    max-width: 34rem;
    margin: 0 3.2rem 0;

    h2 {
        font-family: "Poppins";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin: 2.2rem 0 3.6rem;
        color: ${({ theme }) => theme.COLORS.FG_100};
    }

    &:focus {
        outline: none;
    }

    > div > label {
        display: flex;
        align-items: center;
        padding-left: 6.4rem;
        height: 4.8rem;
        width: 34rem;
        text-align: start;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.FG_500};
        background-color: ${({ theme }) => theme.COLORS.BG_900};
        border-radius: 8px;


        input {
            display: none;
        }

        svg {
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            left: 6.2rem;
            color: ${({ theme }) => theme.COLORS.FG_100};
        }
    }

    `;

export const DishImage = styled.div`
    position: relative;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BG_900};
    color: ${({ theme }) => theme.COLORS.FG_500};

    /* > label {
        display: flex;
        align-items: center;
        padding-left: 3.2rem;
        height: 4.8rem;
        width: 100%;
        text-align: start;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.FG_100};
        }
    } */
`;

export const BackTextButton = styled.div`
    grid-area: back_text_button;
`;
