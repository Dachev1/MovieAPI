import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            const response = await api.post('/auth/login', { email, password });

            if (response?.data?.token) {
                localStorage.setItem('token', response.data.token); // Save token to local storage
                navigate('/'); // Redirect to home page
            } else {
                setError('Unexpected error occurred. Please try again.');
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                'Login failed. Please check your credentials and try again.'
            );
        }
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form-card">
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    <Button variant="primary" type="submit" className="w-100 mt-4">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
