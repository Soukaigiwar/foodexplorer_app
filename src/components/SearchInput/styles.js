import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`

    @media (${devices.desktop}) {
        display: flex;
        flex-direction: column;
        width: 30rem;
        margin-left: 3.2rem;

        input {
            height: 4.8rem;
            width: 30rem;
            padding: 1.2rem 1.4rem 1.2rem 4rem;
            text-align: center;
            border-radius: .8rem;
            border: none;
            background-color: ${({ theme }) => theme.COLORS.BG_900};
            color: ${({ theme }) => theme.COLORS.FG_500};
            font-weight: 400;
            font-size: 1.6rem;
        }

        input:focus {
            outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
        }

        img {
            position: absolute;
            margin-left: 4px;
            margin-top: 12px;
        }
    }
`;
