import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 104px min-content 1fr 77px;
    grid-template-areas: 
        "header"
        "back_text_button"
        "form"
        "footer";

    height: 100vh;

    .backTextButton{
        img {
            width: 2.2rem;
        }
        span {
            display: flex;
            align-items: center;
            padding-top: 1.1rem;
            padding-left: 3.2rem;
            font-size: 1.6rem;

        }
    }

@media (${devices.desktop}) {
    
}
`;

export const Form = styled.form`
    grid-area: form;

    padding: 0 3.2rem;
        
    h2 {
        font-family: "Poppins";
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        padding-top: 2.2rem;
        margin-bottom: 3.6rem;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }
`;

export const BackTextButton = styled.div`
    grid-area: back_text_button;
`;
