import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    label {
        color: ${({ theme }) => theme.COLORS.FG_100};
    }

    > textarea {
        width: 100%;
        height: 17.2rem;

        background-color: ${({ theme }) => theme.COLORS.BG_900};
        color: ${({ theme }) => theme.COLORS.FG_500};
        border: none;
        resize: none;
        font-family: "Roboto";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
        border-radius: 1rem;
        padding: 1.4rem;

        &:focus {
            outline: none;
        }

        &::-webkit-scrollbar {
            width: 2.4rem;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb
        {
            height: 4rem;
            border: .8rem solid;
            border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    @media (${devices.desktop}) {
    
    }
`;
