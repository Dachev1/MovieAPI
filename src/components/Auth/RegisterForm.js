import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            await api.post('/auth/register', {
                email,
                password,
                username: fullName, // Ensure this matches backend expectations
            });
            alert('Registration successful! You can now log in.');
            navigate('/login'); // Redirect to login page
        } catch (err) {
            setError(
                err.response?.data?.message ||
                'Registration failed. Please check your inputs and try again.'
            );
        }
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form-card">
                <h2>Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mt-3">
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
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
