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
        width: 53rem;
        height: 36.4rem;

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
                
                > .payment_pix_area img {
                    width: 25rem;
                    height: 25rem;
                    display: none;
                }

                > form {
                    padding: 5.9rem 9.1rem 4.8rem;

                    fieldset {
                        border: none;
                    }

                    .fieldset_wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }

                    fieldset legend {
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
                }
            }
        }
    }
`;
