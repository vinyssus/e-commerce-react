import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Registration.css'

function Registration() {
  return (
    <div className='container'>
      <Form className='form'>
        <h1 className='text-center text-success'>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="repeat Password" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Registration