import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // them
        --bg-color-light: #e8e3e3;
        --bg-color-dark: #222222;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: var(--bg-color-light);
    }
`