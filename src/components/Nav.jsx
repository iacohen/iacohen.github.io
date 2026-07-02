import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-name">Ilana Cohen</Link>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
