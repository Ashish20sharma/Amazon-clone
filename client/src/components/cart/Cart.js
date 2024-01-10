import React, { useEffect, useState } from 'react'
import "./cart.css"
import { Divider } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
    const [product, setProduct] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`/getproductone/${params.id}`).then((res, err) => {
            if (res.status === 200) {
                setProduct(res.data.result)
            } else {
                toast("Don't find product")
            }
        })
    }, [params.id])


    return (
        <div className='cart_section'>
            {product && Object.keys(product).length &&
                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={product.url} alt='cat_img' />
                        <div className='cart_btn'>
                            <button className='cart_btn1'>Add to cart</button>
                            <Link to="/buynow"><button className='cart_btn2'>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className='right_cart'>
                        <h3>{product.title.shortTitle} </h3>
                        <h4>{product.title.longTitle}</h4>
                        <Divider />
                        <p className='mrp'>M.R.P :{product.price.mrp}</p>
                        <p>Deal of the Day:<span style={{ color: "#B12704" }}>{product.price.cost}</span></p>
                        <p>You save:<span style={{ color: "#B12704" }}> {product.price.mrp - product.price.cost} ({product.price.discount})</span></p>
                        <div className='discount_box'>
                            <h5>Discount : <span style={{ color: "#111" }}>{product.discount}</span></h5>
                            <h4>Free Delivery <span style={{ color: "#111", fontWeight: 600 }}>oct 8 - 21</span>Details</h4>
                            <p>Fastest delivery:<span style={{ color: "#111", fontWeight: 600 }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className='description'>About the Item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{product.description}</span></p>
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default Cart
