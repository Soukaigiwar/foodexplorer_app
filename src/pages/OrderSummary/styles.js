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
    color: ${({ theme }) => theme.COLORS.FG_300};

    margin: 0 3.5rem;
    
    h2 {
        margin-top: 5.6rem;
        margin-bottom: 1.7rem;
    }

    h2 span {
        display: none;
    }

    #item_list {
        display: flex;
        flex-direction: column;
        font-family: "Roboto";
        margin-bottom: 1.7rem;
        
        gap: 1.7rem;
    }

    #head {
        display: none;
    }

    .lines {
        display: grid;
        grid-template-areas:
            "codigo status data_hora"
            "detalhamento detalhamento detalhamento";
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 160%;
        border: 2px solid ${({ theme }) => theme.COLORS.BG_1000};
        border-radius: 8px;
        padding: 1.8rem 2rem;
    }

    .codigo {
        grid-area: codigo;
        margin-right: 3.1rem;
    }

    .status {
        grid-area: status;

        display: flex;

        img {
            margin-right: 0.8rem;
        }
    }

    .detalhamento {
        grid-area: detalhamento;
        margin-top: 1.6rem;
    }

    .data_hora {
        grid-area: data_hora;
        white-space: nowrap;
    }

    @media (${devices.desktop}) {
        grid-area: content;
        margin: 0 auto;

        h2 {
            padding: 0;
            margin-top: 3.429rem;
            margin-bottom: 3.429rem;
        }

        h2 span {
            display: unset;
        }

        #item_list {
            font-family: "Roboto";
            color: ${({ theme }) => theme.COLORS.FG_300};
            gap: 0;
        }

        #head {
            display: flex;
            flex-direction: row;
            font-style: Roboto;
            font-size: 1.4rem;
            
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0.8rem;
        }

        #head_status,
        #head_codigo,
        #head_detalhamento,
        #head_data_hora {
            padding: 2.1rem 2.4rem;
            border: 2px solid ${({ theme }) => theme.COLORS.BG_1000};
        }

        #head_status {
            width: 15.2rem;
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0;
            border-right: none;
        }

        #head_codigo {
            width: 15.2rem;
            border-right: none;
        }

        #head_detalhamento {
            width: 60rem;
            border-right: none;
        }

        #head_data_hora {
            width: 22rem;
            border-top-right-radius: 0.8rem;
        }

        .lines {
            display: grid;
            align-items: center;
            grid-template-areas: "status codigo detalhamento data_hora";
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 160%;
            border: none;
            padding: 0;

        }

        .codigo,
        .status,
        .detalhamento,
        .data_hora {
            border: 2px solid ${({ theme }) => theme.COLORS.BG_1000};
            padding: 1.6rem 2.4rem;
            margin-top: 0;
            border-top: 0;
        }

        .codigo {
            grid-area: codigo;
            border-right: 0;
            margin-right: 0;
            width: 15.2rem;
        }

        .status {
            grid-area: status;

            display: flex;
            align-items: center;
            width: 15.2rem;

            border-right: 0;

            img {
                width: 1rem;
                margin-right: 0.8rem;
            }
        }

        .detalhamento {
            grid-area: detalhamento;
            border-right: 0;
            width: 60rem;

        }

        .data_hora {
            grid-area: data_hora;
            white-space: nowrap;
            width: 22rem;
        }
    }
`;
