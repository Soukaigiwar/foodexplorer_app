import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`

    @media (${devices.desktop}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 3.2rem;
        

        input {
            height: 4.8rem;
            padding: 1.2rem 1.4rem 1.2rem 5rem;
            text-align: center;
            border-radius: .8rem;
            border: none;
            background-color: ${({ theme }) => theme.COLORS.BG_900};
            color: ${({ theme }) => theme.COLORS.FG_500};
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 100%;
        }

        input:focus {
            outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
        }

        img {
            position: absolute;
            margin-left: 14px;
            margin-top: 12px;
        }
    }
`;
