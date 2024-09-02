import {Link, Navigate} from "react-router-dom"
import {useState} from 'react'

export default function LoginPage() {
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const [redirect, setRedirect] =useState(false);
    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
            method:"post",
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        if(response.ok){
            setRedirect(true)
        }else{
            alert('無法登入')
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    } 
    return(
            <form className="login" onSubmit={login}>
            <h2 className="title">登入</h2>
            <input type="text" 
            placeholder="帳號" 
            value = {username}
            onChange={e => setUsername(e.target.value)}/>
            <input type="password" 
            placeholder="密碼"
            value = {password} 
            onChange={e => setPassword(e.target.value)}
            />
            <button>登入</button>
            <Link to="/register">還沒有帳號？註冊</Link>
        </form>
        
    )
}