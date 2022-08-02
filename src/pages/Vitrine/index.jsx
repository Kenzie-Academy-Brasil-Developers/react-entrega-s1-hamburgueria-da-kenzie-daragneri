import { useEffect, useState } from "react"
import Header from "../../components/Vitrine/Header"
import MainVitrine from "../../components/Vitrine/MainVitrine"
import api from "../../services/api"

export default function Vitrine({carrinho, setCarrinho}){
    
    const [filtered, setFiltered] = useState([])
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        api.get('products')
        .then(response => setProducts(response.data))
    }, [])

    return (
        <>
        <Header setFiltered={setFiltered} products={products}/>
        <MainVitrine products={products} filtered={filtered} carrinho={carrinho} setCarrinho={setCarrinho}/>
        </>
        
           
       
    )
}