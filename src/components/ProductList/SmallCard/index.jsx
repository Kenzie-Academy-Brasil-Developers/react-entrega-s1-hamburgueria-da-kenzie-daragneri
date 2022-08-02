import { DivImg, H2, LiInfo, Span, StyledLi } from "./style";

export default function SmallCard({product, deleteItem}){

   return (
        <StyledLi>
            <DivImg>
            <img src={product.img} alt="" />
            </DivImg>
            <LiInfo>
                <H2>{product.name}</H2>
                <Span>{product.category}</Span>
            </LiInfo>
                <div style={{display: 'flex', justifyContent: "flex-start"}}>
                    <button onClick={() => deleteItem(product)}>Remover</button>           
                </div>          
        </StyledLi>
   )
}