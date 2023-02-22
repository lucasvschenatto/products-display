import { createGlobalStyle, DefaultTheme } from "styled-components";
import { Cinzel, Lato } from "@next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const lato400 = Lato({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
* {
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.white};
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

span,label,p{
	font-family: ${lato400.style.fontFamily};
	font-weight: ${lato400.style.fontWeight};
}

h3,h4,button{
	font-family: ${cinzel.style.fontFamily};
	font-weight: ${cinzel.style.fontWeight};
}

body {
  background-color: ${({ theme }) => theme.colors.black};
	margin:unset;
}

`;

export default GlobalStyle;
