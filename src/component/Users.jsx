import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Users = () => {

  const [users, setusers] = useState([])
  const [reload, setreload] = useState(false)


  useEffect(()=>{
    axios.get("http://localhost:4500/Employee")
    .then((response)=>{setusers(response.data)})
    .catch(()=>{console.log("err");})
  });

  let deleusers=(id)=>{
    window.confirm("Are you sure you want to delete")
    toast.warning("Deleted")
   
    axios.delete(`http://localhost:4500/Employee/${id}`)
    setreload(true)
  }


  return (
    <div id={style.usersPage}>
      {
      users.map((e)=>{
        return (
          <table>
            <tr>
              <td>Name</td>
              <td>{e.empname}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{e.empcompany}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>{e.empsalary}</td>
            </tr>
            <tr>
              <td><button><Link to={`/edit/${e.id}`}>Edit</Link></button></td>
              <td><button onClick={()=>deleusers(e.id)}>Delete</button></td>
            </tr>
          </table>
        );
      })
      }
    </div>
  );
}

export default Users;