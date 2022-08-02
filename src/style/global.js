import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    .App {
        height: 100vh;
        width: 100vw;
        background: var(--White);
        font-family: 'Inter', sans-serif;
    }
    a {
        text-decoration: none;
    }

    :root {
        --White: #ffff;
        --Green: #27AE60;
        --Grey0: #E0E0E0;
        --Grey1: #F5F5F5;
        --Grey2: #828282;
        --Grey3: #333333;
        --Grey4: #BDBDBD;
    }

    button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    section, div, aside {
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: flex-start; 
    }


`