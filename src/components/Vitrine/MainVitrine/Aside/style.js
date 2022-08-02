import styled from "styled-components";

export const StyledAside = styled.aside`
    width: 100%;
    height: 45%;
    background-color: var(--Grey1);
    border-radius: 0px 0px 5px 5px;

    @media screen and (min-width: 768px) {
        width: 30%;
        height: 100%;
    }

`
export const StyledCartTop = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
    width: 100%;
    background-color: var(--Green);
    padding-left: 1.25rem;
    border-radius: 5px 5px 0px 0px;

    
    span {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--White);
    }

`

export const StyledCartMiddle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 60%;

  
   
   a {
    font-size: 0.875rem;
    color: var(--Grey2)
   }

`

export const StyledSpan = styled.span`
    padding: 0.8rem;
    font-size: 1.125rem;
    font-weight: 700;
`
export const StyledDivTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;     
    width: 100%;
`

export const StyledCartBottom = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
    height: 30%;
    max-height: 30%;
    padding: 1.25rem 0.625rem;

    &::before {
        content: '';
        background-color: var(--Grey0);
        width: 100%;
        height: 2px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        height: 45%;
        font-size: 1rem;
        color: var(--Grey2);
        background-color: var(--Grey0);
        font-weight: 600;
        border: 2px solid var(--Grey0);
        border-radius: 8px;
    }

`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0.813rem;
    gap: 1rem;

`

