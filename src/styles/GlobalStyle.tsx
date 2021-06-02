import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
} 
 

html {
  line-height: 1.15;  
  -webkit-text-size-adjust: 100%; 
} 

body {
  margin: 0;
} 

body {
  font-family:
		system-ui,
		-apple-system,  
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}

button {
  background-color: transparent;
  background-image: none;
  border:none;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

 input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}
`;

export default GlobalStyle;
