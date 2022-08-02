import { useEffect, useState } from "react";

import Vitrine from "./pages/Vitrine";





function App() {

  const [carrinho, setCarrinho] = useState([])



  return (
    <div className="App">
    <Vitrine carrinho={carrinho} setCarrinho={setCarrinho}/>
    </div>
  );
}

export default App;
