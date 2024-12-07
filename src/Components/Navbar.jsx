import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from './utils/global.context'

const Navbar = () => {
  const {state, dispatch} = useGlobalState()
  return (
    <nav className={state.tema == "dark" ? "nav-dark" : "nav-light"} >
    <Link to="/"><ul>🏥 Home</ul></Link>
    <Link to="/contacto"><ul>📩 Contáctanos</ul></Link>
    <Link to="/favs"><ul>❤️ Mis favoritos</ul></Link>
    <button className="theme-button" onClick={() => dispatch({type: "CHANGE_THEME"})}> Cambiar tema {
      state.tema == "dark" ? "🌒" : "🌞"
      } </button>
  </nav>
  )
}

export default Navbar