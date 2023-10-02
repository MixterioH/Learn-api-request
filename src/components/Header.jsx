import { Link } from "react-router-dom"
import "./header.css"
const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <h2>
          <Link to={"/"}>Blog</Link>
        </h2>

        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/new"}>Novo Post</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header