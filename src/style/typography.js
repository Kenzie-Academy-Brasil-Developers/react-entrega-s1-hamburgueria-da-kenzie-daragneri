import styled, {css} from "styled-components";


export const ThemeTitle = styled`
   font-family: 'Montserrat', sans-serif;
   font-size: 1.125rem;
   font-weight:  700;
   color: var(${(props) => props.color});
`;

export const ThemeInputLabel = styled`
   font-family: 'Montserrat', sans-serif;
   font-size: 1rem;
   font-weight: 700;
   color: var(${(props) => props.color})
`
