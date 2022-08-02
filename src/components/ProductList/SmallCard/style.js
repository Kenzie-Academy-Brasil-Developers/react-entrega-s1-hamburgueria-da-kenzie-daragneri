import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.5rem; 
    
    
`
export const DivImg = styled.div`
    width: 25%;
    background-color: var(--Grey0);
    border-radius: 5px;

    
    img {
    width: 100%;
    object-fit: contain;
}

`
export const LiInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;  
    width: 55%;
   
`

export const H2 = styled.h2`
     font-size: 0.875rem;
`

export const Span = styled.span`
        font-size: 0.75rem;
        font-weight: 400;
`