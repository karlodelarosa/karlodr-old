import { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/template.style.css'

const menu = [
  { name: 'Home', url: '/'},
  { name: 'Story', url: '/story'},
  { name: 'Projects', url: '/projects'},
  { name: 'Connect', url: '/connect'}
]

class NavMenu extends Component {
  render() {
    return (
      <nav className="w-full h-[75px] px-[30px] fixed top-0 right-0 z-50">
        <ul className="h-full flex flex-row gap-x-[50px] items-center justify-end">
          {menu.map((data, index) => (
            <li key={index} className="nav-menu">
              <Link to={data.url}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavMenu