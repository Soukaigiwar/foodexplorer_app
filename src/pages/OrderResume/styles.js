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

// export const ItemList = styled.div`
//     grid-area: resume;
// `;

// export const PaymentArea = styled.div`
//     grid-area: payment;
// `;

export const Content = styled.div`
    display: grid;
    grid-template-areas: "item_list payment_area";
    margin-top: 3.4rem;

    .item_list {
        grid-area: item_list;
        display: flex;
        flex-direction: column;
        /* background-color: darkgray; */
        margin-left: 12.3rem;
        width: 44.4rem;
        height: 56rem;
        
        h2 {
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
        
        h3 {
            margin: 1.6rem ;
            font-family: "Poppins";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.FG_300};
        }
    }

    .payment_area {

        grid-area: payment_area;
        
        color: ${({ theme }) => theme.COLORS.FG_300};
        align-items: center;
        justify-content: center;
        width: 53rem;
        height: 36.4rem;
        margin-right: 19.6rem;

        .payment_method {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 8px;
            border: 1px solid var(--light-light-600, #76797B);

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
                background-color: ${({ theme }) => theme.COLORS.BG_800};
                border-bottom: 1px solid var(--light-light-600, #76797B);
                cursor: pointer;
                
                > span {
                    color: ${({ theme }) => theme.COLORS.FG_300};
                }

                > img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 0.8rem;
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }

            .pix {
                border-right: 1px solid var(--light-light-600, #76797B);
                border-radius: 8px 0px 0px 0px;
            }

            .credit {
                background-color: ${({ theme }) => theme.COLORS.BG_500};
                border-radius: 0px 8px 0px 0px;
            }

            > .payment_content {
                .payment_pix_area {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    padding: 4.7rem 13rem;

                    img {
                        width: 25rem;
                        height: 25rem;
                    }
                }

                > form {
                    display: none;
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

                    .input_validate,
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

                .waiting_payment_area {
                    display: none;
                }

                .payment_done_area {
                    display: none;
                }
                
                .delivery_done_area {
                    display: flex;
                }
            }
        }
    }
`;
