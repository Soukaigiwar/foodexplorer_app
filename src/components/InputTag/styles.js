import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    display: flex;
    width: ${({ isnew }) => isnew ? "10.6rem" : "14rem"};
    height: 3.2rem;
    background-color: ${({ theme, isnew }) =>
        isnew ? theme.COLORS.BG_900 : theme.COLORS.FG_500};
    color: ${({ theme }) => theme.COLORS.FG_100};
    border: ${({ theme, isnew }) =>
        isnew ? `1px dashed ${theme.COLORS.FG_500}` : "none"};
    border-radius: .8rem;
    padding: 1rem 0.6rem 1rem 1.6rem;
    margin: 1.6rem 0 1.6rem 1.6rem;

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
        min-width: 6.6rem; 
        border: none;
        font-family: 'Roboto';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        cursor: ${({ isnew }) => isnew ? "text" : "default"};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.FG_500};
        }

        &:focus {
            outline: none;
        }
    }

    @media (${devices.desktop}) {
        input {
            
        }

        input:focus {
            outline: solid 1px ${({ theme }) => theme.COLORS.FG_100};
        }

        label {
            
        }
    }
`;
