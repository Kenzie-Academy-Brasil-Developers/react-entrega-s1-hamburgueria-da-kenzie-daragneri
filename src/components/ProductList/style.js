import styled from "styled-components";

export const Container = styled.ul`

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 10px; 
    width: 100%;
    height: 100%;
    overflow-x: scroll;

    @media screen and (min-width: 768px){
         width: 65%;
         flex-wrap: wrap;
         overflow-x: hidden;
    }
  
`;