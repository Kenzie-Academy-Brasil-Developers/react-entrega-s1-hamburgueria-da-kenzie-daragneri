import { CardInfo, StyledLi } from "./style"

export const Card = ({product, carrinho, setCarrinho}) => {


 const handleCarrinho = (product) => {
    const isThere = carrinho.find((e) => {
        return e === product
    })
    if(isThere){
        return alert('produto já existe no carrinho')
    }
    setCarrinho([...carrinho, product])
 }

    return (
        <StyledLi>
            <img src={product.img} alt="" />
            <CardInfo>
            <h2>{product.name}</h2>
            <span>{product.category}</span>
            <span>{product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span>
            <button onClick={() => handleCarrinho(product)}>Adicionar</button>         
            </CardInfo>
        </StyledLi>
    )
} 