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

.image {
    text-align: center;

    img {
            margin: 1.6rem auto 1.6rem;
            width: 26.4rem;
        }
}

@media (${devices.desktop}) {

}`;

export const Content = styled.div`
    grid-area: content;
    
    @media (${devices.desktop}) {
        grid-area: content;
        width: 113.2rem;
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
        
        table, tr, th {
            border: 1px solid ${({ theme }) => theme.COLORS.BG_1000};
            border-spacing: 0;
            color: ${({ theme }) => theme.COLORS.FG_300};        
        }
        
        tr {
            th {
                padding: 2.1rem 2.4rem;
                font-size: 1.4rem;
                font-weight: 700;
                text-align: start;
            }
            th:nth-child(1) {
                width: 15rem;
            }
            
            th:nth-child(2) {
                width: 15rem;
            }
            
            th:nth-child(3) {
                width: 67rem;
            }
    
            th:nth-child(4) {
                width: 15rem;
            }
            
            td {
                border: 1px solid ${({ theme }) => theme.COLORS.BG_1000};
                font-size: 1.4rem;
                font-weight: 400;
                padding: 16px 24px;
                
    
                > div {
                    display: flex;
                    align-items: center;
    
                    img {
                        margin-right: 0.8rem;
                    }
                }
            }
        }
    }`;
