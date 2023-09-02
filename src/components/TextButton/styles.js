import styled from "styled-components";

export const Container = styled.div`
    span {
        display: flex;
        justify-content: start;
        align-items: center;
        
        font-family: "Poppins";
        font-size: 2.4rem;
        font-weight: 500;
        width: 100%;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }
`;
