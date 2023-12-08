import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
    display: grid;
    grid-template-areas: "item_list payment_area";
    margin-top: 3.4rem;

    .title, h2, h3 {
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    h3 {
        font-size: 1.8rem;
    }

    .title {
        grid-area: item_list;
        margin-left: 12.3rem;
    }

    .item_list {
        grid-area: item_list;
        display: flex;
        flex-direction: column;
        margin-left: 12.3rem;
        margin-top: 7.2rem;
        
        padding-bottom: 1.6rem;
        width: 44.4rem;
        height: 40rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 0.8rem;
        }
    
        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.COLORS.BG_800};
        }

        &::-webkit-scrollbar-thumb
        {
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.FG_500};
        }
    }
    
    .total {
        margin-left: 12.3rem;
        margin-top: -11.6rem;
        font-family: "Poppins";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    .payment_area {
        grid-area: payment_area;
        color: ${({ theme }) => theme.COLORS.FG_300};
        width: 53rem;
        height: 36.4rem;
        margin-right: 19.6rem;

        .payment_method {
            flex-direction: column;
            justify-content: space-between;
            border-radius: 8px;
            border: 1px solid ${({ theme }) => theme.COLORS.FG_600};

            margin: 3.4rem auto 7.5rem;

            > div {
                display: flex;
            }

            .pix, .credit {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.2rem 1.4rem;
                width: 50%;
                height: 8.1rem;
                border-bottom: 1px solid var(--light-light-600, #76797B);
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

            .pix {
                /* aba do pix */
                border-right: 1px solid ${({ theme }) => theme.COLORS.FG_600};
                border-radius: 8px 0px 0px 0px;
                background-color: ${({ method, theme }) => method === "pix" ? theme.COLORS.BG_800 : theme.COLORS.BG_400};
            }

            .credit {
                /* aba do credito */
                border-radius: 0px 8px 0px 0px;
                background-color: ${({ method, theme }) => method === "credit" ? theme.COLORS.BG_800 : theme.COLORS.BG_400};
            }

            > .payment_content {
                display: flex;
                justify-content: center;

                .payment_pix_area {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 4.7rem 13rem;
                    
                    img {
                        width: 25rem;
                        height: 25rem;
                    }
                }

                > form {
                    display: block};
                    padding: 5.9rem 9.1rem 4.8rem;

                    .fieldset_wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }

                    fieldset {
                        border: none;
                        font-family: "Roboto";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 100%;
                    }

                    .col-2 {
                        display: flex;
                        gap: 1.7rem;
                    }

                    .input_validate {
                        width: 16.6rem;
                        height: 4.8rem;
                        font-family: "Roboto";
                        font-size: 16px;
                        border: none;
                        border-radius: 0.8rem;
                        margin-top: 8px;
                        background-color: ${({ theme }) => theme.COLORS.BG_900};
                        color: ${({ theme }) => theme.COLORS.FG_600};
                        padding: 1.2rem 1.4rem;
                    }

                    .input_cvc {
                        width: 16.6rem;
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
                        font-size: 2.4rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin-top: 3.7rem;
                    }
                }

                /* .waiting_payment_area {
                    display: ${({ status }) => status === "pending" ? "flex" : "none"};
                }

                .payment_done_area {
                    display: ${({ status }) => status === "paid" ? "flex" : "none"};
                }
                
                .delivery_done_area {
                    display: ${({ status }) => status === "delivered" ? "flex" : "none"};
                } */
            }
        }
`;
