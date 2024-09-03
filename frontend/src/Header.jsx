import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

export default function Header() {
  const [username, setUsername] =useState(null)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include'
    }).then(response =>{
      response.json().then(userInfo =>{
        setUsername(userInfo.username)
      })
    })
  },[])
    return (
      <header>
      <Link to="/" className="logo">Nodium</Link>
      <nav className="menu">
      {username && (
        <>
          <Link to="/create">新增文章</Link>
          <Link className="hamburger-menu"><FiMenu /></Link>
        </>
      )}
      {!username && (
        <>
        <Link to="/login" className="login">登入</Link>
        <Link className="hamburger-menu"><FiMenu /></Link>
        </>
        
      )}
        
        
      </nav>
     </header>
    )
}