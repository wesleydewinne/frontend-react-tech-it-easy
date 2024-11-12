import {bestSellingTv} from "../constants/inventory.js";

const brand = bestSellingTv.brand;
const type = bestSellingTv.type;
const name = bestSellingTv.name;

function productInformation (){
    return `${brand} ${type} ${name}`;
}

export default productInformation;

