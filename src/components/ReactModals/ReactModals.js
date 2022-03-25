import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'

const ReactModals = (props) => {
 console.log(props.product);
 const {title,image,price,description,category} = props.product
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
             <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        <img className='w-50' src={image} alt="" />
      
          <div className='d-flex flex-column'>
          <h1>Price: {price}$</h1>
          
          <Modal.Title>{title}</Modal.Title>
          </div>    
        </Modal.Header>
        <Modal.Body>
          <h4>Category: {category}</h4>
          {description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
};

export default ReactModals;