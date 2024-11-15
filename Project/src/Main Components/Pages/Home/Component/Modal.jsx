import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const ProductModal = ({modal,toggle,data,handleAddToCart}) => {
const defaultimg="https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015264987-TAGZZ34KP1L39K2IF6NJ/placeholder-image-horizontal.png"
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        <ModalHeader toggle={toggle}>Product: {data?.name}</ModalHeader>
        <ModalBody>
        <Row>
            <Col lg='6'>
            <div style={{ marginTop: '20px' }}>
                    <p><strong>Part Name:</strong> {data?.name}</p>
                    <p><strong>Price:</strong> {data?.price}</p>
                    <p><strong>Specifications:</strong> {data?.specifications}</p>
                </div>
            </Col>
            <Col lg='6'>
                <div style={{width:'100%',height:'200px'}}>
                    <img src={data?.img || defaultimg} style={{width:'100%',height:'100%'}}  />
                </div>
            </Col>
        </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddToCart}>Add to cart</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductModal;
