import React from 'react'
import './Contact.css';
import { Button, Form } from 'react-bootstrap'

function Contact() {
  return (
    <div className='container'>
      <Form className='form1'>
        <h1 className='text-center text-success'>Contact</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Que pouvons nous faire pour vous ?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default Contact