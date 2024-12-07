import axios from 'axios';
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function Delete() {
   
        const {userId} = useParams();

        const navi = useNavigate();

        const [users, setUser] = useState({ });


        async function fetchData(){
            const result = await axios.get(`http://localhost:5000/users/${userId}`)
            setUser(result.data)
        }

        useEffect(()=>{
            fetchData()
        }, [])

        function deleteUser(){
            axios.delete(`http://localhost:5000/users/${userId}`);
        navi('/show');
        }

        return (
            <>
                <center>
                    <h1>ARE YOU SURE?</h1>
                    <button onClick={() => deleteUser()} class="btn btn-danger">YES</button>&nbsp;
                    <NavLink to={`/show`}><button class="btn btn-info">NO</button></NavLink>
                </center>
            </>
            )
}

export default Delete