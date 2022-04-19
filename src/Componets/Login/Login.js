import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.css'

function Login() {
  return (
    <div className='container'>
      <Form className='formulaire'>
        <h1 className='text-center text-success'>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login