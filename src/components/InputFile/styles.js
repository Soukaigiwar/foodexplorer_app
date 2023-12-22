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
        left: 3.2rem;
        margin: 1.2rem 0 3.2rem;
        width: 2.4rem;
    }

    div {
        height: 4.8rem;
        padding: 1.2rem 6.4rem;
        margin-bottom: 3.2rem;
        border-radius: 0.8rem;
        border: none;

        background-color: ${({ theme }) => theme.COLORS.BG_900};
        font-weight: 400;
        font-size: 1.6rem;

        > span {
            color: ${({ theme }) => theme.COLORS.FG_100};
        }

        &:focus {
            outline: none;
        }
    }

    input {
            display: none;
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
