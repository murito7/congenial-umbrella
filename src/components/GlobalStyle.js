import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .g-body,
    .g-content-data {
        background: ${({theme}) => theme.backgroundColor} ;
    }
    .g-header .g-title,
    .g-content-header .g-profile-username,
    .g-content-header .g-profile-joindate,
    .g-content-info .g-item h3,
    .g-content-data p  {
        color: ${({theme}) => theme.text} ;
    }
    .g-content-data h4, 
    .g-content-bio,
    .g-content-header .g-profile-joindate,
    .g-content-info .g-item h3,
    .g-search-bar input::placeholder {
        color: ${({theme}) => theme.lightWhite} ;
    }
    .g-mode-type{
        color: ${({theme}) => theme.icon} ;
    }
    .g-search-bar input[type="text"] {
        background: ${({theme}) => theme.input} ;
        color: ${({theme}) => theme.text} ;
    }
    .g-main {
        background: ${({theme}) => theme.input} ;
    }
`;

export const lightTheme = {
    background: "#fff",
    text: "#fff",
    backgroundColor: "#141D2F",
    icon: "#fff",
    input: "#1E2A47",
    lightWhite: "#b9b9b9"
};

export const darkTheme = {
    background: "#000",
    text: "#000",
    icon: "#000",
    input: "#fff",
    lightWhite: "#000"
};