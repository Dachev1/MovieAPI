import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    ref={revText}
                    placeholder="Write your review..."
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;
