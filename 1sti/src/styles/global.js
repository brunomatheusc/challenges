import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(-180deg, #ff7f00, #ffba00);
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, span, p, label {
        color: #fff;
    }
`;