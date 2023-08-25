import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: "Roboto", serif;
        background-color: ${({ theme }) => theme.COLORS.BG_400};
    }

    body, input, button, textarea {
        font-family: "Roboto", serif;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.FG_100};
    }
`;
