import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;
	}

	body {
        -webkit-font-smoothing: antialiased;
		width: 414px;
		height: 896px;
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
`;