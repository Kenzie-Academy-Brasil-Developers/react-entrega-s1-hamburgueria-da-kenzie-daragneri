import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: var(--Grey1);
    align-items: center;

`

export const StyledDivHeader = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    max-height: 100%;
    align-items: center;

    
`
export const StyledDivInputHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    max-height: 100%;
    background-color: var(--White);
    padding: 0.625rem;
    border: 2px solid var(--Grey0);
    border-radius: 8px;
    
    input {
        width: 70%;    
        max-height: 100%;
        border: none;

        &::placeholder{
            color: var(--Grey0);  
        }
         
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        max-width: 30%;     
        max-height: 100%;
        background-color: var(--Green);
        padding: 0.719rem 1.25rem;
        border: 2px solid var(--Green);
        border-radius: 8px;
        color: var(--White);
    }
    

`
