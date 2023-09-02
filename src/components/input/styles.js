import styled from "styled-components";
import { devices } from "../../styles/media"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
        height: 4.8rem;
        padding: 1.2rem 1.4rem;
        margin-bottom: 3.2rem;
        border-radius: .8rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BG_900};
        color: ${({ theme }) => theme.COLORS.FG_500};
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 100%;

        &:focus {
            outline: none;
        }
    }

    label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FG_400};
        margin-bottom: 0.8rem;
    }

    @media (${devices.desktop}) {
        input {
            margin-bottom: 0;
        }

        input:focus {
            outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
        }

        label {
            margin-bottom: 0;
        }
    }
`;
