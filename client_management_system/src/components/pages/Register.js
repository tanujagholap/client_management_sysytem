import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Register() {

    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data)
        navi('/show')
    }

  return (
    <div>
        <center>
        <form className='container' onSubmit={handleSubmit(saveData)}>
            <label>CLIENT NAME :</label>
            <input type='text' className='form-control' {...register('name')}></input>
            <br/><br/>
            <label>COMPANY NAME: </label>
            <input type='text' className='form-control' {...register('companyname')}></input>
            <br/><br/>
            <label>EMAIL: </label>
            <input type='email' className='form-control' {...register('email')}></input>
            <br/><br/>
            <label>CONTACT: </label>
            <input type='number' className='form-control' {...register('contact')}></input>
            <br/><br/>
            <label>ROLE: </label>
            <input type='text' className='form-control' {...register('role')}></input>
            <br/><br/>
            <button type='submit' className='btn btn-success'>SUBMIT</button>&nbsp;&nbsp;
            <button type='reset' className='btn btn-warning'>RESET</button>
        </form>
        </center>
    </div>
  )
}

export default Register