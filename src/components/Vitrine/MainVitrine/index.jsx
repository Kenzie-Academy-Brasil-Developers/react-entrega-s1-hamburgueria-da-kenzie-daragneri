import { ProductList } from "../../ProductList";
import Aside from "./Aside";
import { Main, StyledContainerMain } from "./style";

export default function MainVitrine({filtered, products, carrinho, setCarrinho}) {
    return (
        <Main>
            <StyledContainerMain>
            <ProductList products={products} filtered={filtered} carrinho={carrinho} setCarrinho={setCarrinho}/>
            <Aside carrinho={carrinho} setCarrinho={setCarrinho}/>
            </StyledContainerMain>
        </Main>       
    )
}