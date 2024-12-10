import './App.css';
import { bestSellingTv, inventory } from "./constants/inventory.js";
import quantityPurchase from "./helpers/quantityPurchase.js";
import amountSold from "./helpers/amountSold.js";
import calculatieStock from "./helpers/calculatieStock.js";
import productInformation from "./helpers/productInformation.js";
import tvScreenSizeString from "./helpers/tvScreenSizeString.js";
import minus from './assets/minus.png';
import check from './assets/check.png';
import productPrice from './helpers/price.js'



function App() {
    function sortBestSellers () {
        inventory.sort((a, b) => {
            return a.sold - b.sold;
        });

        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);
    }

  return (
      <>
          <main className="page-box">
              <h1>Tech it easy dashboard</h1>
              <section>
                  <h2>Verkoopoverzicht</h2>
                  <div className="dashboard-box">
                      <article className="green-text">
                          <h3>Aantal verkochte producten</h3>
                          <h2>{amountSold(inventory)}</h2>
                      </article>
                      <article className="blue-text">
                          <h3>Aantal ingekochte producten</h3>
                          <h2>{quantityPurchase(inventory)}</h2>
                      </article>
                      <article className="red-text">
                          <h3>Aantal te verkopen producten</h3>
                          <h2>{calculatieStock(inventory)}</h2>
                      </article>
                  </div>
              </section>
              <section>
                  <article className="product">
                      <div className="product-info">

                          <h3>Bestverkochte TV: {bestSellingTv.name} ({bestSellingTv.brand})</h3>
                          <span className="product-image">
                              <img
                                  src={bestSellingTv.sourceImg}
                                  alt="Bestseller TV"
                                  style={{width: '300px'}}
                              />
                          </span>
                          <p>Verkocht:{amountSold([bestSellingTv])}</p>
                          <p>Beschikbare schermgroottes: {tvScreenSizeString(bestSellingTv)}</p>
                          <p className="product-price">Prijs: {productPrice(bestSellingTv.price)}</p>
                          <ul className="option-list">
                              <li><img src={check} style={{width: '20px', height: '20px'}} alt="Icoon: aanwezig"/> wifi</li>
                              <li><img src={minus} style={{width: '20px', height: '20px'}}
                                       alt="Icoon: niet aanwezig"/> speech
                              </li>
                              <li><img src={check} style={{width: '20px', height: '20px'}} alt="Icoon: aanwezig"/> hdr</li>
                              <li><img src={check} style={{width: '20px', height: '20px'}} alt="Icoon: aanwezig"/> bluetooth
                              </li>
                              <li><img src={minus} style={{width: '20px', height: '20px'}}
                                       alt="Icoon: niet aanwezig"/> ambilight
                              </li>
                          </ul>
                      </div>
                  </article>
              </section>
              <section>
                  <h2>Alle tvs</h2>
                  <button type="button" onClick={sortBestSellers}>
                      Meest verkocht eerst
                  </button>
                  <button type="button" onClick={sortCheapest}>
                      Goedkoopste eerst
                  </button>
                  <button type="button" onClick={sortSport}>
                      Meest geschikt voor sport eerst
                  </button>
                  {inventory.map((tv) => {
                      return (
                          <article className="product" key={tv.type}>
                            <span className="product-image">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                              <div className="product-info">
                                  <h3>{productInformation(tv)}</h3>
                                  <p className="product-price">{productPrice(tv.price)}</p>
                                  <p>{tvScreenSizeString(tv.availableSizes)}</p>
                                  <ul className="option-list">
                                      {tv.options.map((option) => {
                                          if (option.applicable === true) {
                                              return <li key={`${tv.type}-${option.name}`}>
                                                  <img src={check}
                                                    alt="Icoon: aanwezig"
                                                    className="icon"/>{option.name}
                                              </li>
                                          } else {
                                              return <li key={`${tv.type}-${option.name}`}>
                                                  <img src={minus}
                                                    alt="Icoon: niet aanwezig"
                                                    className="icon"/>{option.name}
                                              </li>
                                          }
                                      })}
                                  </ul>
                              </div>
                          </article>
                      )
                  })}
              </section>
          </main>
      </>
  )
}

export default App
