import React, { useEffect, useState } from 'react';
import ItemsList from './ItemsList';
import { Row, Col, Card, Input } from 'reactstrap';
import DateFilters from './Component/Filters';
import { Collapse, Button } from 'reactstrap';
import { BsCart4 } from "react-icons/bs";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [items, setitems] = useState([]);
    useEffect(() => {
      console.log(items,'selected items')
    }, [items])
    
    return (
        <div className='container'>
            <Row>
                <Col md='6'>
                    <Card className='mt-4 mb-4'>
                        <Input placeholder='Seacrh' type="search" style={{ border: '0px', outline: 'none', fontSize: '16px' }} />
                    </Card>
                </Col>
                <Col md='6'>

                    <div className='mt-4 mb-4 w-100 d-flex justify-content-end flex-column ' >
                    <Button  onClick={toggle} style={{ marginBottom: '1rem',backgroundColor:'#f4f4f4',color:'black',border:'0px' }}>Show Filters</Button>
                        <DateFilters toggle={toggle} isOpen={isOpen} />
                    </div>

                </Col>
                <Col>
                       <div className='d-flex justify-content-between align-items-center '>
                       <div className='d-flex align-items-center'>
                        <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" alt="cart" style={{width:'60px'}} />
                        <p className='mt-3'>Total Items: {items?.length} </p> 
                        </div>
                        <p>
                            $: {items?.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
                        </p>
                       </div>
                    </Col>
            </Row>
            <Row>
                <Col lg='6'>
                    <ItemsList setitems={setitems} items={items} />
                </Col>
                <Col lg='6'>
                    <ItemsList setitems={setitems} items={items}/>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
