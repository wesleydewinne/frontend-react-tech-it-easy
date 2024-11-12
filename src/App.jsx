import './App.css';
import {inventory} from "./constants/inventory.js";
import quantityPurchase from "./helpers/quantityPurchase.js"
import amountSold from "./helpers/amountSold.js";
import calculatieStock from "./helpers/calculatieStock.js";
import productInformation from "./helpers/productInformation.js";



function App() {
  return (
      <>
              <h1>Begin hier met met maken van de applicatie!</h1>
              <br/>
              <p>{amountSold(inventory)}</p>
              <br/>
              <p>{quantityPurchase(inventory)}</p>
              <br/>
              <p>{calculatieStock(inventory)}</p>
              <br/>
              <p>{productInformation(inventory)}</p>

      </>


  )
}

export default App
