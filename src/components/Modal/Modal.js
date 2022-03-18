import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const MyModal = (props) => {
    const {image, title, description, category, price} = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props.product)

    return (
        <>
            <Button variant="info text-white py-1" onClick={handleShow}>
                Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                    <img className='w-50' src={image} alt="images"/> 
                    </div>
                    <h4 className='mt-3'>Price: {price}</h4>
                    <h6><b>Product Category:</b> {category}</h6>
                    <p>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Buy Now
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MyModal;