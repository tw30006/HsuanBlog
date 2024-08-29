import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function Header() {
    return (
      <header>
      <Link to="/" className="logo">Nodium</Link>
      <nav className="menu">
        <Link to="/login" className="login">登入</Link>
        <Link className="hamburger-menu"><FiMenu /></Link>
      </nav>
     </header>
    )
}