import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUsers = () => {

    let userid = useParams();
    let navigate = useNavigate()

    const [name, setname] = useState("")
    const [Salary, setSalary] = useState("")
    const [Company, setCompany] = useState("")


    useEffect(()=>{
        axios.get(`http://localhost:4500/Employee/${userid.abc}`)
        .then((response)=>{
            setname(response.data.empname)
            setSalary(response.data.empsalary)
            setCompany(response.data.empcompany)
            console.log(response.data.empcompany)
        })
        .catch(()=>{console.log("err");})
    },[])

    let formhandle =(e)=>{
        e.preventDefault()
        let payload ={
            empname : name,
            empsalary:Salary,
            empcompany:Company
        }
        axios.put(`http://localhost:4500/Employee/${userid.abc}`,payload)
        .then(()=>{console.log("updates");})
        .catch(()=>{console.log("errr");})

        navigate("/users")
    }
 
    
  return (   
    <div id={styles.usercreate}>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={((e)=>{setname(e.target.value)})} />
        <label htmlFor="">Salary</label>
        <input type="text" value={Salary} onChange={((e)=>{setSalary(e.target.value)})}  />
        <label htmlFor="">Company</label>
        <input type="text" value={Company} onChange={((e)=>{setCompany(e.target.value)})} />
        <button onClick={formhandle}>Update</button>
      </form>
    </div>
  );
};

export default EditUsers;
