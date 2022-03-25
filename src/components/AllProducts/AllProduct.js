import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProduct = (props) => {
    const {setCartCount} = props;

    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[products]);

 console.log(products);
    return (
        <div>
            <h1>All Product</h1>
           <div className="row">
           {
                products.map( (pd) => (
                    <SingleProduct setCartCount={setCartCount} key= {pd.id} product = {pd}></SingleProduct>
                ))};
           </div>
            
        </div>
    );
};

export default AllProduct;