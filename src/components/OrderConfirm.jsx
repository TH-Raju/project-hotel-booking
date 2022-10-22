import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';

const OrderConfirm = () => {
    const notify = () => toast.success('❤️ Order Confirmed!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    return (
        <div className='w-50 mx-auto p-4 '>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Present address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" required />
                </Form.Group>
                <div className='text-center'>
                    <Button onClick={notify} variant="primary" type="submit" >
                        Confirm Order
                    </Button>
                    <ToastContainer />
                </div>
            </Form>
        </div>
    );
};

export default OrderConfirm;