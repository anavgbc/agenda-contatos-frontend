import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input,textarea {
	margin: 0;
	padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
	vertical-align: baseline;
    text-decoration: none;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    background-color: #f7f7f7;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;    /* display: flex;
    flex-direction: column;
    justify-content: center; */
}
.chakra-button__group{
    justify-content: space-around;
    width: 100%;
    
}
.chakra-modal__content{
    align-items: center;
}
ol, ul {
	list-style: none;
}
button {
	cursor: pointer;
}
::-webkit-scrollbar{
    width: 7px;
    height: 7px;
}
::-webkit-scrollbar-track{
    background: var(--grey-4);
    border-radius: 20px;
}
::-webkit-scrollbar-thumb{
    background: var(--grey-3);
    border-radius: 30px;
}
`;

export default GlobalReset;
