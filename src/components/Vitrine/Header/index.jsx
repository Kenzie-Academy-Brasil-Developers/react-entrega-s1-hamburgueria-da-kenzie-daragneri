import { StyledDivHeader, StyledDivInputHeader, StyledHeader } from "./style";
import  logo  from "./../../../assets/logo.svg"
import { useEffect, useState } from "react";

export default function Header({setFiltered, products}){

    const [inputValue, setInputValue] = useState('')


    useEffect(() => {
       setFiltered(products.filter((p) => {
        return (
            p.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            p.category.toLowerCase().includes(inputValue.toLowerCase())
        )
       }))
    }, [inputValue])

    return (
        <StyledHeader>
            <StyledDivHeader>
                <img src={logo} alt="Logo"/>
                <StyledDivInputHeader>
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder="Digite sua pesquisa..." />
                    <button>Pesquisar</button>
                </StyledDivInputHeader>
            </StyledDivHeader>
        </StyledHeader>
    )
}