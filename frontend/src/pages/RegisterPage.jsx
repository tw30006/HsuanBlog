import {useState} from 'react';

export default function Register() {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [name, setName ]= useState('');

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method: 'post',
            body: JSON.stringify({username,password,name}),
            headers: {'Content-Type': 'application/json'},
        })
        console.log(response);
        if(response.status === 200){
            alert('註冊成功')
        }else{
            alert('註冊失敗！')
        }
    }
    return (
        <form className="register" onSubmit={register}>
            <h2 className="title">註冊</h2>
            <input type="text" placeholder="帳號" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="text" placeholder="密碼" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="text" placeholder="姓名" value={name} onChange={e => setName(e.target.value)}/>
            <button className="register-button">註冊</button>
        </form>
    )
}