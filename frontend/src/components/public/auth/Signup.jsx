import React from 'react'
import { Button,Form} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { signupService } from '../../../services/auth';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = async data => {
    const result = await signupService(data)
    toast(result.message)
    // if(result.status)
    //  return navigate("/login")
  };
  return (
    <div className='bg-image'>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{color:"#fff"}}>Register Yourself Now!</h2><br/>
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
        <Button className='btn btn-primary' type='submit'>Signup</Button>
      </Form.Group>
    </Form>
    <ToastContainer />
</div>
  )
}
