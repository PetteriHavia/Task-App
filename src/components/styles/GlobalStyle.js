import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    background-color: hsl(236, 33%, 92%);
}

input{
    font-size: 1.2rem;
}

button{
    font-family: 'Poppins', sans-serif;
}

h4{
    color: #797979;
    font-weight: 500;
}

`;
export default GlobalStyle;