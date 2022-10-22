import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaBed, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdFoodBank } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Package = () => {
    return (
        <div>
            <CardGroup>
                <Card className="p-4">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title>Single Room</Card.Title>
                        <Card.Text>
                            This Room is a Single Room For All of Signle Person. You have all support from us. and get all of offer.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className='d-flex gap-4 align-items-center'>
                        <span><FaBed /> 1P</span>
                        <span><MdFoodBank></MdFoodBank> Food</span>
                        <span><FaMoneyCheckAlt ></FaMoneyCheckAlt> 100</span>
                    </Card.Footer>
                    <Button variant="primary"> <Link to='/confirm' className='text-white text-decoration-none'>Book Now</Link> </Button>
                </Card>
                <Card className="p-4">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                        <Card.Title>Couple Room</Card.Title>
                        <Card.Text>
                            This Room is a Couple Room For All of Couple. You have all support from us. and get all of offer.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className='d-flex gap-4 align-items-center'>
                        <span><FaBed /> 2P</span>
                        <span><MdFoodBank></MdFoodBank> Food</span>
                        <span><FaMoneyCheckAlt ></FaMoneyCheckAlt> 500</span>
                    </Card.Footer>
                    <Button variant="primary"> <Link to='/confirm' className='text-white text-decoration-none'>Book Now</Link> </Button>
                </Card>
                <Card className="p-4">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='h-8' />
                    <Card.Body>
                        <Card.Title>Family Room</Card.Title>
                        <Card.Text>
                            This Room is a Family Room For All of Family Person. You have all support from us. and get all of offer.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className='d-flex gap-4 align-items-center'>
                        <span><FaBed /> 8P</span>
                        <span><MdFoodBank></MdFoodBank> Food</span>
                        <span><FaMoneyCheckAlt ></FaMoneyCheckAlt> 1000</span>
                    </Card.Footer>
                    <Button variant="primary"> <Link to='/confirm' className='text-white text-decoration-none'>Book Now</Link> </Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Package;