import React, { useState } from 'react'
import styles from './home.module.css'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

function UserCreate() {

  const [name, setname] = useState("")
  const [nameErr, setnameErr] = useState(false)
  const [Salary, setSalary] = useState("")
  const [SalaryErr, setSalaryErr] = useState(false)
  const [Company, setCompany] = useState("")
  const [CompanyErr, setCompanyErr] = useState(false)

  let navigate = useNavigate()

  function getname(e){
    //  setname(e.target.value)
    let item = e.target.value
    if(item.length <4){
     setnameErr(true)
    }else{
      setnameErr(false)
    }
    setname(item)
  }
  function getSalary(e){
    // setSalary(e.target.value)

    let item1 = e.target.value
    if(item1.length <4){
      setSalaryErr(true)
    }else{
      setSalaryErr(false)
    }
    setSalary(item1)
  }
  function getCompany(e){
    // setCompany(e.target.value)
    let item3 = e.target.value
    if(item3.length<5){
      setCompanyErr(true)
    }else{
      setCompanyErr(false)
    }
    setCompany(item3)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(name.length<4 || Salary.length<4 || Company.length<5){
       toast.error("Please Fill The All Input 🙄🙄🙄")
  }else{
      toast.success("Created 😍😍🥰")
      e.preventDefault()
      let payload = {
          empname : name,
          empcompany: Company ,
          empsalary : Salary,
      }
   
      axios.post("http://localhost:4500/Employee",payload)
      .then(()=>{console.log("data stored");})
      .catch(()=>{console.log("errror");})
   
   
      navigate("/Users")
     }
  }
  

  return (
    <div id={styles.usercreate}>
      <form>
        <label htmlFor=''>Name</label>
        <input type='text' value={name}  onChange={getname} />
        {nameErr  ? <span>Invalid data</span> : null}
        <label htmlFor='' >Salary</label>
        <input type='number' value={Salary} onChange={getSalary} />
        {SalaryErr  ? <span>Invalid data</span> : null}
        <label htmlFor=''>Company</label>
        <input type='text' value={Company} onChange={getCompany} />
        {CompanyErr  ? <span>Invalid data</span> : null}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default UserCreate