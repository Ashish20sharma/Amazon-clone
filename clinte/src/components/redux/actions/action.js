import axios from "axios"
export const getProducts=()=>async (dispatch)=>{
    try {
        axios.get("/getproducts").then((res,err)=>{
            // console.log(res)
            if(res.status===200){
                dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res.data.result})
            }
        })
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.message})
    }
}