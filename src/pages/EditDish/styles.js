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
    margin-left: 12.5rem;

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

    #ingredients {
        font-family: "Roboto";
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.FG_100};
        margin-bottom: 1.6rem;
    }

@media (${devices.desktop}) {

}
`;

export const Form = styled.form`
    grid-area: form;

    h2 {
        padding: 2.5rem 3.2rem;
        font-family: "Poppins";
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin: 2.2rem 0 3.6rem;
        color: ${({ theme }) => theme.COLORS.FG_100};
    }

    .input_area {
        margin: 0 3.2rem;
        display: flex;
        flex-direction: column;

        &:focus {
            outline: none;
        }

        > div > label {
            display: flex;
            align-items: center;
            padding-left: 6.4rem;
            height: 4.8rem;
            width: 34rem;
            text-align: start;
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.FG_500};
            background-color: ${({ theme }) => theme.COLORS.BG_900};
            border-radius: 8px;


            input {
                display: none;
            }

            svg {
                position: absolute;
                width: 2.4rem;
                height: 2.4rem;
                left: 6.2rem;
                color: ${({ theme }) => theme.COLORS.FG_100};
            }
        }
    }

    .tag_and_price_area {
        margin: 0 3.2rem ;
        display: flex;
        flex-direction: column;
    }
    
    .description_area {
        margin: 0 3.2rem ;
    }

    .submit_area {
        display: flex;
        gap: 3.2rem;
        margin: 0 3.2rem;
        margin-bottom: 5.3rem;

        > button {
            width: 17.3rem;
        }
    }

    @media (${devices.desktop}) {
        max-width: unset;
        margin: 0 auto;

        h2 {
            padding: 0 12.5rem;
            width: 100%;
        }

        .input_area {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 3.2rem;
            width: 112rem;
            margin: 0 12.5rem;


            > div:nth-child(1) {
                width: 22.9rem;
            }

            > div:nth-child(2) {
                display: flex;
                height: 100%;
                width: 46.3rem;
                cursor: pointer;
                color: ${({ theme }) => theme.COLORS.FG_500};

                input {
                    padding: 1.2rem 1.4rem;
                    margin-top: 0.9rem;
                    width: 100%;
                }
            }

            > div:nth-child(3) {
                width: 36.4rem;
            }
        }

        .tag_and_price_area {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 3.2rem;
            width: 112rem;
            margin: 0 12.5rem;

            > div {
                width: 25.1rem;
                
            }
        }

        .description_area {
            margin: 0 12.5rem;
            width: 112rem;
            > div {
                display: flex;
                flex-direction: row;
                margin: 0 auto;
            }
        }

        .submit_area {
            display: flex;
            gap: 3.2rem;
            justify-content: flex-end;
            width: 112rem;
            /* margin: 0 12.5rem; */
            margin-bottom: 11.6rem;
        }
    }

    `;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    min-height: 4.8rem;
    /* width: 100%; */
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BG_900};
    color: ${({ theme }) => theme.COLORS.FG_500};
    margin-bottom: 3.2rem;

    @media (${devices.desktop}) {
        display: inline-flex;
        flex-wrap: wrap;
        width: 83.7rem;
        
        > input {
            background-color: red;
            width: 200px;
        }
    }
`;

export const BackTextButtonArea = styled.div`
    grid-area: back_text_button;

    @media (${devices.desktop}) {
        margin: 0 auto;
        width: 112rem;
    }
`;
