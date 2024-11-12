 function productSold (tvArray) {
    let total = 0;

    for (let i = 0; i < tvArray.length; i++) {
        total = total + tvArray[i].sold;
    }
    return total;
 }

 export default productSold;