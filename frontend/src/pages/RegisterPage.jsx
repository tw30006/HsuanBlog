
export default function Register() {
    return (
        <form className="register">
            <h2 className="title">註冊</h2>
            <input type="text" placeholder="帳號"/>
            <input type="text" placeholder="密碼" />
            <input type="text" placeholder="姓名" />
            <button className="register-button" type="button">註冊</button>
        </form>
    )
}