import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
.image {
        margin: 1.6rem auto 1.6rem;
        width: 26.4rem;
}

.details {
    padding: 0 5.6rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2 {
        font-family: "Poppins";
        font-size: 2.7rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3.78rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    > p {
        text-align: center;
        font-family: "Poppins";
        font-size: 16.225px;
        font-style: normal;
        font-weight: 400;
        line-height: 2.27rem;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    > .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    margin-bottom: 5rem;
}

.actions {
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: 3.8rem;
    gap: 1.6rem;
    

    > div {
        display: inline-flex;
        align-items: center;
        gap: 1.6rem;
        font-family: "Roboto";
        font-size: 2.2rem;
        font-weight: 700;
        height: 3.8rem;
        color: ${({ theme }) => theme.COLORS.FG_300};
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15.4rem;
        height: 3.8rem;
        font-size: 0.94rem;
        font-weight: 500;
        line-height: 1.6rem;
        cursor: pointer;
    }
}

@media (${devices.desktop}) {
    .dish {
        padding: 0 12.2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 4.2rem;

        .image{
            justify-content: center;
            margin: 0;
            padding: 0;
            width: 39rem;
        }
        
        .details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 0;
            padding: 0 0 0 4.78rem;

            p {
                text-align: start;
            }

            .tags {
                justify-content: start;
            }
        }

        .actions {
            justify-content: flex-start;
        }
    }
}
`;
