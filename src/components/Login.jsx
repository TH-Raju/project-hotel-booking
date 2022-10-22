import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const { user, signIn } = useContext(AuthContext);
    const location = useLocation();

    const navigates = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {

                form.reset();
            })
            .catch(error => {
                console.error(error);
            })


    }

    useEffect(() => {
        if (user) {
            navigates(from, { replace: true })
        }
    }, [user])


    return (
        <div className="w-50 mx-auto">
            <h1 className='text-center mb-6'>Log In</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>

            </Form>
        </div>
    );
};

export default Login;