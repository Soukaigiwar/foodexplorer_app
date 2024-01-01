import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 3.2rem;
    padding: 0rem 0.6rem 0rem 1.6rem;
    margin: 0.8rem 0 0.8rem 0.8rem;
    
    .tags {
        display: flex;
        justify-content: center;
        padding: 0 1.6rem;
        background-color: ${({ theme, $isnew }) =>
        $isnew ? theme.COLORS.BG_900 : theme.COLORS.FG_500};
        color: ${({ theme }) => theme.COLORS.FG_100};
        border-radius: .8rem;
        border: ${({ theme, $isnew }) =>
        $isnew ? `1px dashed ${theme.COLORS.FG_500}` : "none"};
        
        > button {
            border: none;
            background: none;
        }

        .button-delete,
        .button-add {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.FG_100};
            cursor: pointer;
            
            > svg {
                font-size: 1.4rem;
            }
        }

        .button-add {
            > svg {
                color: ${({ theme }) => theme.COLORS.FG_500};
            }
        }

        > input {
            color: ${({ theme }) => theme.COLORS.FG_100};
            background: transparent;
            width: 11.7rem;
            border: none;
            font-family: 'Roboto';
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 400;
            cursor: ${({ $isnew }) => $isnew ? "text" : "default"};

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.FG_500};
            }

            &:focus {
                outline: none;
            }
        }
    }

    @media (${devices.desktop}) {
        display: inline-flex;
        padding: 0;
        /* margin: 0; */
        width: auto;
        /* margin: 0.4rem 0.8rem; */
        .main_area {
            width: 300px;
            min-width: 11.6rem;
            padding: 0;
            margin: 0;
            /* height: 3.2rem; */
        }
        
        .tags {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: ${({ theme, $isnew }) =>
        $isnew ? theme.COLORS.BG_900 : theme.COLORS.FG_500};
            color: ${({ theme }) => theme.COLORS.FG_100};
            border-radius: .8rem;
            border: ${({ theme, $isnew }) =>
        $isnew ? `1px dashed ${theme.COLORS.FG_500}` : "none"};
            width: 11.6rem;
            height: 3.2rem;
            padding: 1.6rem 1rem;

            > input {
                color: ${({ theme }) => theme.COLORS.FG_100};
                width: 6.8rem;
                height: 3.2rem;

                > input:focus {
                    outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
                }
            }
        }
    }
`;
