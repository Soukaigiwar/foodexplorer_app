import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`

display: grid;
grid-template-rows: 104px 1fr 77px;
grid-template-areas: 
    "header"
    "content"
    "footer";

height: 100vh;

@media (${devices.desktop}) {
    
}
`;

export const Content = styled.div`
    grid-area: content;

    @media (${devices.desktop}) {
        width: 113rem;
        margin: 0 auto;
        
        h2 {
            margin-top: 3.43rem;
            margin-bottom: 2.62rem;
            color: var(--Light-Light-300, ${({ theme }) => theme.COLORS.FG_300});
            font-family: 'Poppins';
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }

        .no_items {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            align-items:center;

            span {
                font-size: 16rem;
            }
        }

        h3 {
            color: var(--Light-Light-300, ${({ theme }) => theme.COLORS.FG_300});
            font-family: 'Poppins';
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .cards::after {
            content: "";
            flex: 1 0 calc(25% - 4.8rem);
        }

        .favorite_card {
            flex: 1 0 calc(25% - 4.8rem);
            margin-right: 4.8rem; 
            padding: 1.6rem 4.8rem 4.8rem 0;
            margin-right: 0;
        }
}
`;
