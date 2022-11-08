import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useRoutes } from 'react-router-dom'

function Header({onAdd, showForm}) {
  const location = useLocation();

  return (
    <header className='header'>
        <h2>Task Tracker</h2>
        {location.pathname==='/' && <button style={{marginLeft:"30px"}} className={`btn ${showForm?'btn-danger':'btn-sucess'}`} onClick={onAdd}>{`${showForm?'Close':'Add'}`}</button>}
    </header>
  )
}

Header.defaultProps = {
}

Header.propTypes = {
}
export default Header