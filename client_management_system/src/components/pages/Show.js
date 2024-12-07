import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [users, setUser] = useState([]);

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <div>
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th>Client ID</th>
                    <th>Client Name</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Role</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.companyname}</td>
                                <td>{obj.email}</td>
                                <td>{obj.contact}</td>
                                <td>{obj.role}</td>
                                <td>
                                    <NavLink to={`/update/${obj.id}`}><button className='btn btn-info'>UPDATE</button></NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/delete/${obj.id}`}><button className='btn btn-danger'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Show