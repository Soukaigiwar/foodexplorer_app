/* eslint-disable indent */
import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 114px auto 77px;
    grid-template-areas:
        "header"
        "content"
        "footer";
    width: 100%;
    height: 100vh;

    @media (${devices.desktop}) {
        grid-template-rows: 104px auto 77px;
    }
`;

export const Content = styled.div`

    .title,
    h2,
    h3 {
        font-family: Poppins;
        font-style: normal;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    .item_list_area {
        display: block;
        .title {
            margin: 5.6rem 3.5rem 2.7rem;
        }

        .item_list {
            grid-area: item_list;
            display: flex;
            flex-direction: column;
            margin: 0 3.9rem 0px;
            min-height: calc(100vh - 484px);
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }

        .total {
            margin: 1rem 3.9rem 0rem;   
            
            > h3 {
                font-family: Poppins;
                font-size: 1.8rem;
                font-style: normal;
                font-weight: 500;
                line-height: 160%;
                color: ${({ theme }) => theme.COLORS.FG_300};
            }
        }

        > .next_button {
            display: flex;
            justify-content: end;

            > button {
                width: 216px;
                margin-bottom: 5.8rem;
                margin-right: 3.7rem;
            }
        }
    }

    .payment_method_area {
        display: flex;
        margin-top: 5.6rem;
        
        > .payment_area {
            margin: 0 3.5rem 0 3.5rem; 
            width: 100%;

            .payment_method {
                flex-direction: column;
                justify-content: space-between;
                border-radius: 8px;
                border: 1px solid ${({ theme }) => theme.COLORS.FG_600};
                margin: 3.2rem auto;
                
                > div {
                    display: flex;
                }
                
                /* botões do método de pagamento */
                .pix,
                .credit {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.2rem 1.0rem;
                    width: 50%;
                    height: 8.1rem;
                    border-bottom: 1px solid var(--light-light-600, #76797b);
                    background-color: ${({ theme }) => theme.COLORS.BG_800};
                    cursor: pointer;

                    > span {
                        color: ${({ theme }) => theme.COLORS.FG_300};
                    }

                    > img {
                        /* icone do metodo de pagamento */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 0.8rem;
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                }

                /* aba do pix */
                .pix {
                    border-right: 1px solid ${({ theme }) => theme.COLORS.FG_600};
                    border-radius: 8px 0px 0px 0px;
                    background-color: ${({ method, theme }) =>
    method === "pix" ? theme.COLORS.BG_800 : theme.COLORS.BG_400};
                }

                /* aba do credito */
                .credit {
                    border-radius: 0px 8px 0px 0px;
                    background-color:
                        ${({ method, theme }) => method === "credit"
                            ? theme.COLORS.BG_800
                            : theme.COLORS.BG_400
                        };
                }

                > .payment_content {
                    display: flex;
                    justify-content: center;

                    .payment_pix_area {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            margin: 3.1rem 0;
                            width: 18rem;
                            height: 18rem;
                        }
                    }

                    > form {
                        display: block;
                        color: ${({ theme }) => theme.COLORS.FG_400};
                        margin: 5.9rem 2.6rem 4.8rem;
                        width: 100%;

                        fieldset {
                            border: none;
                            font-family: "Roboto";
                            font-size: 1.6rem;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 100%;
                        }

                        .col-2 {
                            display: flex;
                            width: 100%;
                            gap: 1.7rem;
                        }

                        .input_wrapper{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                        }
                        .input_validate {
                            width: 100%;
                            height: 4.8rem;
                            font-family: "Roboto";
                            font-size: 1.6rem;
                            border: none;
                            border-radius: 0.8rem;
                            margin-top: 8px;
                            background-color: ${({ theme }) => theme.COLORS.BG_900};
                            color: ${({ theme }) => theme.COLORS.FG_600};
                            padding: 1.2rem 1.4rem;
                        }

                        .input_cvc {
                            width: 100%;
                        }
                    
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                    
                        input[type="date"]::-webkit-calendar-picker-indicator {
                            display: none;
                            -webkit-appearance: none;
                        }
                        
                    }
                }
            }

            .waiting_payment_area,
            .payment_done_area,
            .delivery_done_area {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 5.9rem auto;
                opacity: 0.4;
                
                img {
                    width: 12.8rem;
                    height: 12.8rem;
                }
                
                > p {
                    font-family: "Roboto";
                    font-size: 2.3rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-top: 3.7rem;
                    color: ${({ theme }) => theme.COLORS.FG_400};
                }
            }
        }
    }

    @media (${devices.desktop}) {
        display: flex;
        gap: 7.5rem;

        .item_list_area {
            display: flex;
            flex-direction: column;
            margin-left: 12.3rem;
            margin-top: 3.2rem;
            width: 44.4rem;

            .title {
                margin-top: 0;
                margin-left: 0;
                width: 100%;
            }

            .item_list {
                display: flex;
                flex-direction: column;
                margin-left: 0;
                margin-bottom: 0;
                width: 100%;
                height: 39rem;
                overflow-y: auto;

                &::-webkit-scrollbar {
                width: 0.8rem;
                }

                &::-webkit-scrollbar-track {
                background: ${({ theme }) => theme.COLORS.BG_800};
                }

                &::-webkit-scrollbar-thumb {
                border-radius: 9999px;
                background-color: ${({ theme }) => theme.COLORS.FG_500};
                }
            }

            .total {
                width: 100%;
                margin-left: 0;
                margin-top: 0;
                
                > h3 {
                    height: 3.2rem;
                    font-size: 2rem;
                }
            }

            > .next_button {
                display: none;
            }
        }

        .payment_method_area {
            display: flex;
            flex-direction: column;
            margin-top: 3.2rem;
            margin-bottom: 3.2rem;
            
            > .payment_area {
                display: block;
                width: 53rem;
                margin-left: 0;

                .payment_method {
                    margin: 3.4rem auto 0;

                    > .payment_content {
                        margin: 0 9.1rem;

                        .payment_pix_area {
                            padding: 4.7rem 13rem;

                            img {
                                width: 25rem;
                                height: 25rem;
                            }
                        }

                        > form {
                            margin: 5.9rem 0 4.8rem;
                            button {
                                width: 100%;
                            }
                            .input_validate {
                                width: 16.6rem;
                            }

                            .input_cvc {
                                margin-top: 0.8rem;
                            }
                                label {
                                    margin-bottom: unset;
                            }
                        }
                    }
                }
            }
        }
    }
`;
