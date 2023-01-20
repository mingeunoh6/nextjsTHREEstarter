import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
         :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

      html, body{
        width: 100%;
        height: 100%;
        background-color:white;
      }
      body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      }
      #__next{
         width: 100%;
        height: 100%;
      
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    `;

export default GlobalStyle;
