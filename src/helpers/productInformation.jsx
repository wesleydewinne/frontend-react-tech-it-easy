import {bestSellingTv} from "../constants/inventory.js";

const image = bestSellingTv.sourceImg;
const brand = bestSellingTv.brand;
const type = bestSellingTv.type;
const name = bestSellingTv.name;

function productInformation (){
    return (
        <div>
            <img src={image} alt="tv"/>
            <p>{brand}</p>
            <p>{type}</p>
            <p>{name}</p>
        </div>
    )
}

export default productInformation;

