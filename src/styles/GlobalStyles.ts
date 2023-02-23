import { createGlobalStyle, DefaultTheme } from "styled-components";
import { Cinzel, Lato } from "@next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const lato400 = Lato({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
:root{
	--logo-color: ${({ theme }) => theme.colors.white}
}

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

body {
  background-color: ${({ theme }) => theme.colors.black};
	margin:unset;
}

main{
	margin-top: ${({ theme }) => theme.spacing["2xl"]};
}

span,p{
	font-family: ${lato400.style.fontFamily};
	font-weight: ${lato400.style.fontWeight};
	text-transform: capitalize;
	margin:0;
}

em{
	color: ${({ theme }) => theme.colors.gold};
}

h1,h2,h3,h4,button{
	font-family: ${cinzel.style.fontFamily};
	font-weight: ${cinzel.style.fontWeight};
	margin: 0 auto;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

h2,h3,h4,button{
	text-align: center;
}

h3,h4{
	font-size: ${({ theme }) => theme.fontSize.b};
}

a{
	text-decoration: none;
	* {
		cursor: pointer;
	}
}
span.react-loading-skeleton{
	z-index:0;
}
`;

export default GlobalStyle;
