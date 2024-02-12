import React from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div id={styles.nav}>
        <Link to="/createusers">UserCreate</Link>
        <Link to="/users">Users</Link>
    </div>
  )
}

export default Home