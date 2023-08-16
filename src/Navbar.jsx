import Home from './Home'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <a href="home" onClick={() => <Home />}>
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
