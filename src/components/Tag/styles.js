import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    justify-content: space-between;
    height: 3.2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BG_1000};

    span {
        text-align: center;
        font-family: "Poppins";
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.FG_100};
    }
`;
