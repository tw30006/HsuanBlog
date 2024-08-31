import {Link} from "react-router-dom"
export default function LoginPage() {
    return(
        <form className="login">
            <h2 className="title">登入</h2>
            <input type="text" placeholder="帳號"/>
            <input type="text" placeholder="密碼" />
            <button>登入</button>
            <Link to="/register">還沒有帳號？註冊</Link>
        </form>
    )
}