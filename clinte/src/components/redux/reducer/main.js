import { getProductsreducer } from "./Productsreducer";
import {combineReducers} from "redux";

const reducer=combineReducers({
    getproductsdata:getProductsreducer,
});

export default reducer;