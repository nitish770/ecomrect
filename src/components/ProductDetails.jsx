import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/action/index';

const ProductDetails = () => {
    const[cartbtn, setCartBtn]= useState("Add to Cart");
    // Now we need a product id which is pass from the product component.
   const proid = useParams();
   const proDetail = DATA.filter(x =>x.id == proid.id);
   const product = proDetail[0];
   console.log(product);

// we need to store useDispatch in a variable
    const dispatch = useDispatch()

   const handleCart=(product)=>{
        if (cartbtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove form Cart")
        }else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
   }
  return (
    <>
    <div className="container my-5 py-4">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} height="400px"/>
                {/* <img src="/image/img2.jpg" alt={product.title} /> */}
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h2 className='my-5'>${product.Price}</h2>
                <p className='lead'>{product.desc}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-4'>{cartbtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails;