import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    /* border: solid 1px red; */
    width: 25rem;

    span {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 3.76rem 0 0 5.6rem;
        font-family: "Poppins";
        font-size: 2.4rem;
        font-weight: 500;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    @media (${devices.desktop}) {
        /* border: solid 1px blue; */

        span {
            padding: 3.76rem 0 0 12.2rem;
        }
    }
`;
