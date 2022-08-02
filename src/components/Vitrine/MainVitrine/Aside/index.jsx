import SmallCard from "../../../ProductList/SmallCard";
import { StyledAside, StyledCartBottom, StyledCartMiddle, StyledCartTop, StyledDivTotal, StyledSpan, StyledUl } from "./style";

export default function Aside({carrinho, setCarrinho}){

    const deleteItem = (product) => {
        setCarrinho(carrinho.filter(e => e !== product))
    }

    const total = carrinho.reduce((counter, acc) => (counter += acc.price), 0)

    return (

        <StyledAside>

            <StyledCartTop>

                <span>Carrinho de compras</span>

            </StyledCartTop>

            <StyledCartMiddle>

                {
                    carrinho.length === 0 ? 
                    (
                        <>
                            <StyledSpan>Sua sacola está vazia</StyledSpan>
                            <a href='https://www.google.com'>Adicione itens</a>
                        </>
                    )
                    :
                    (   
                        <StyledUl>
                            {
                                carrinho.map((product) => <SmallCard deleteItem={deleteItem} key={product.id} product={product}/>)                      
                            }   
                        </StyledUl>
                        
                    )
                    
                }
                
            </StyledCartMiddle>

            <StyledCartBottom>
                
                <StyledDivTotal>

                    <span>Total</span>
                    <span>{total.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span>

                </StyledDivTotal>

                <button onClick={() => setCarrinho([])}>Remover Todos</button>
              
            </StyledCartBottom>

        </StyledAside>
    )
}