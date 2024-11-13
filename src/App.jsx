import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import quantityPurchase from "./helpers/quantityPurchase.js"
import amountSold from "./helpers/amountSold.js";
import calculatieStock from "./helpers/calculatieStock.js";
import productInformation from "./helpers/productInformation.jsx";
import formPrice from "./helpers/price.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";



function App() {
  return (
      <>
          <h1>Begin hier met met maken van de applicatie!</h1>
              <section>
                      <div className="box box1">
                              <h3>Aantal verkochte producten</h3>
                              <p>{amountSold(inventory)}</p>
                      </div>
                      <div className="box box2">
                              <h3>Aantal ingekochte producten</h3>
                              <p>{quantityPurchase(inventory)}</p>
                      </div>
                      <div className="box box3">
                              <h3>Aantal te verkopen producten</h3>
                              <p>{calculatieStock(inventory)}</p>
                      </div>
              </section>
              <section>
                      <div className="tvbox"></div>
                      <div className="imagebox"></div>
                      <div className="tekstbox">
                      {productInformation(bestSellingTv)}
                  <br/>
                  <p>{formPrice(300, 200)}</p>
                  <br/>
                  <p>{tvScreenSizeString(bestSellingTv)}</p>
                      </div>
              </section>

      </>


  )
}

export default App
