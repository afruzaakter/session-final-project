
import ReactModals from '../ReactModals/ReactModals';
import './SingleProduct.css'


const SingleProduct = (props) => {
    console.log(props.product);



    const {setCartCount} = props
    return (
        <div
        data-aos="flip-right"
        // data-aos="fade-down-left"
        // data-aos="flip-up"
        className='col-md-4'>
          <div className="card p-3 border">
              <img className='w-50 m-auto' src={props.product.image} alt="" />
          <h2>{props.product.title.slice(0, 10)}</h2>
          <div className='d-flex justify-content-around'>
          <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
          <button className='btn btn-danger'>Delete</button>
          {/* <button className='btn btn-info'>Details</button> */}
          <ReactModals product={props.product} ></ReactModals>
          </div>
          </div>
     
        
        </div>
    );
};

export default SingleProduct;