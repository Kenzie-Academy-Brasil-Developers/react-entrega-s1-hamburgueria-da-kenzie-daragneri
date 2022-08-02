import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
   

`
export const StyledContainerMain = styled.div`
    width: 80%;
    height: 85%;
    margin-top: 2.8%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }

`