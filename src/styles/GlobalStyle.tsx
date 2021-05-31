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


 
 
`;

export default GlobalStyle;
