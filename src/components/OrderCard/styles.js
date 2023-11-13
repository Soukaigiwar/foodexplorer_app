import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    padding: 1.6rem 0;
    gap: 3.4rem;

    > img {
        width: 7.7rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        
        p {
            color: ${({ theme }) => theme.COLORS.FG_300};
            span {
                margin-left: 1.2rem;
                font-size: 1.2rem;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.FG_300};
            }
        }
        span {
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.TOMATO_400};
            
        }
    }

`;