import { Component } from 'react'
import './style/template.style.css'

const menu = [
  { name: 'Home', url: ''},
  { name: 'Story', url: ''},
  { name: 'Projects', url: ''},
  { name: 'Connect', url: ''}
]

class NavMenu extends Component {
  render() {
    return (
      <nav className="w-full h-[75px] px-[30px] fixed top-0 right-0">
        <ul className="h-full flex flex-row gap-x-[50px] items-center justify-end">
          {menu.map((data, index) => (
            <li key={index} className="nav-menu">
              <a href="/">{data.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavMenu