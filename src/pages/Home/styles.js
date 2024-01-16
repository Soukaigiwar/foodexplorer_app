import styled from "styled-components";

export const Container = styled.div`
    > p {
        padding: 0 3rem;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }
`;

export const Content = styled.div`
        margin: 0 auto;
        justify-content: center;
        max-width: 136.8rem;
`;
