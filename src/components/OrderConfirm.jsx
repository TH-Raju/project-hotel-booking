import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const OrderConfirm = () => {
    const onF = () => {
        toast.success('Successfully toasted!')
    }
    return (
        <div className='text-center p-4'>
            <Button onClick={onF} variant="primary" type="submit">
                Confirm Order
            </Button>
        </div>
    );
};

export default OrderConfirm;