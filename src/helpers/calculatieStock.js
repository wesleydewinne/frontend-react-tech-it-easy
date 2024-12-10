import amountSold from "./amountSold.js";
import quantityPurchase from "./quantityPurchase.js";

function calculatieStock (productArray) {
    const productPurchase = quantityPurchase(productArray);
    const productSold = amountSold(productArray);
    return productPurchase - productSold;
}

export default calculatieStock;