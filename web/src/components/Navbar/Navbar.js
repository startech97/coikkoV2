import React, {Component} from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {useNavbarRoutes} from '../../routes'
const links = [
  {to: '/home', label:'Главная',exact: true},
  {to: '/results', label:'Результаты',exact: true},
  {to: '/auth', label:'Войти',exact: true},
]
class Navbar extends Component {

  renderLink() {
    return links.map((link,index)=> {
      return(
        <li key={index}>
          <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }
  render() {
    return(
      <nav className={classes.Navbar}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderLink()}
            {/* <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li> */}
          </ul>
        </div>
      </nav>
    )
  }
    
}

export default Navbar