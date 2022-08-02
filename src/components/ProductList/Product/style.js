import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid var(--Grey1);
    border-radius: 5px;



    img {
        width: 100%;
        max-width: 100%;
        height: 40%;
        max-height: 40%;
        object-fit: contain;
        background-color: var(--Grey1);
        
    }
    
    @media screen and (min-width: 768px) {
        width: 32%;
        height: 49%;
    }

`
export const CardInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    max-height: 60%;
    padding: 0.6rem 0.9rem;


    h2 {
        font-size: 1.125rem;
    }

    span {
        font-size: 0.75rem;
    }

    span + span {
        font-size: 0.875rem;
    }

    button {
        font-size: 0.875rem;
        background-color: var(--Green);
        color: var(--White);
        font-weight: 600;
        padding: 5px 15px;
        border: 2px solid var(--Green);
        border-radius: 8px;
    }


`