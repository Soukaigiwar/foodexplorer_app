import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;

    span {
        display: flex;
        font-family: "Roboto";
        font-size: 1.6rem;
        font-weight: 400;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }
    
    &:focus {
        outline: none;
    }
`;
