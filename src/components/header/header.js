import React from 'react'
import s from './header.module.css'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div className={s.header}>
    <div className="header d-flex">
    <h3>
      <Link to="/">
        StarDB
      </Link>
    </h3>
    <ul className="d-flex">
      <li>
        <Link to="/people">People</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/starships">Starships</Link>
      </li>
    </ul>
  </div>
  </div>
  )
}

export default header