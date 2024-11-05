import './App.css';
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (
      <>
        <h1>Begin hier met met maken van de applicatie!</h1>
        {bestSellingTv.type}
        {amountSold()}
      </>

  )
}

export default App
