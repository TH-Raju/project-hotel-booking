import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderConfirm = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div className='text-center p-4'>
            <Button onClick={notify} variant="primary" type="submit">
                Confirm Order
            </Button>
        </div>
    );
};

export default OrderConfirm;