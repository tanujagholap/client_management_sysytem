import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Update() {

    const {register, setValue, handleSubmit} = useForm();

    const navi = useNavigate();

    const {userId} = useParams();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('name', result.data.id)
        setValue('name', result.data.name)
        setValue('companyname', result.data.companyname)
        setValue('email', result.data.email)
        setValue('contact', result.data.contact)
        setValue('role', result.data.role)
    }

    useEffect(()=>{
        fetchData()
    }, [])

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
            <button type='submit' className='btn btn-success'>UPDATE</button>
        </form>
        </center>
    </div>
  )
}

export default Update