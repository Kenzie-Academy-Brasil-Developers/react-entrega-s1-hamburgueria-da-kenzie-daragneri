
import { Card } from "../ProductList/Product"
import { Container } from "./style"

export const ProductList = ({filtered, products, carrinho, setCarrinho}) => {

 return (
    <Container>
        {   
            filtered.length === 0 ? (
                <>
                    {
                        products.map((product) => <Card product={product} key={product.id} carrinho={carrinho} setCarrinho={setCarrinho}/>)
                    }
                </>
             )  
             : 
              (
                <>  
                    {
                        filtered.map((product) => <Card product={product} key={product.id} carrinho={carrinho} setCarrinho={setCarrinho}/>)
                    }
                
                </>
              )
            
        }      
    </Container>
 )   
}

