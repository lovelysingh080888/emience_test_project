import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { loginService } from '../../../services/auth';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = async data =>{
    const result = await loginService(data)
    toast(result.message)
    if(result.status){
      localStorage.setItem('accessKey',result.data.accesskey)
      localStorage.setItem('username',result.data.user.username)
      localStorage.setItem('isLogin',result.status)
      navigate("/product")
      window.location.reload()

    }
    
  }
  return (
    <div className='bg-image'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 style={{color:"#fff"}}>Login to Dashboard</h2><br/>
          <Form.Group>
            <Form.Label style={{color:"#fff"}}>Username</Form.Label>
            <Form.Control placeholder='username' {...register("username", { required: true, maxLength: 40 })}  />
            {errors.username?.type ==='required' && <p role="alert" style={{color:'red'}}>Username is required</p>}

          </Form.Group>
          <Form.Group>
            <Form.Label style={{color:"#fff"}}>Password</Form.Label>
            <Form.Control placeholder='password' type='password' {...register("password", { required: true,minLength:6, maxLength: 30 })} />
            {errors.password?.type ==='required' && <p role="alert" style={{color:'red'}}>Password is required</p>}
            {errors.password?.type ==='minLength' && <p role="alert" style={{color:'red'}}>Password must be 6 characters long</p>}
           
          </Form.Group>
          <Form.Group>
            <br/>
            <Button className='btn btn-primary' type='submit'>Login</Button>
          </Form.Group>
        </Form>
      <ToastContainer />
    </div>
  )
}
