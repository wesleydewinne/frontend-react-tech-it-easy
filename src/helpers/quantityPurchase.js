function quantityPurchase (tvArray) {
    let total = 0;

    for (let i = 0; i < tvArray.length; i++) {
        total = total + tvArray[i].originalStock;
    }

    return total;
}

export default quantityPurchase;