import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FG_100};
        margin-bottom: 1.6rem;
    }

    img {
        position: absolute;
        top: 3.2rem;
        right: 1.6rem;
        margin: 1.2rem 0 3.2rem;
        width: 2.4rem;
        pointer-events: none;
    }

    select {
        display: inline-block;
        width: 100%;
        
        cursor: pointer;
        font-family: "Roboto";
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        /* padding: 10px; */
        border: none;
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.FG_100};
        outline: none;
    }

    div {
        height: 4.8rem;
        padding: 1.2rem 1.6rem;
        margin-bottom: 3.2rem;
        border-radius: 0.8rem;
        border: none;

        background-color: ${({ theme }) => theme.COLORS.BG_900};
        font-weight: 400;

        &:focus {
            outline: none;
        }
    }


    @media (${devices.desktop}) {
        input {
            
        }

        input:focus {
            outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
        }

        label {
            
        }
    }
`;
