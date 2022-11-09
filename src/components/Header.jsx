import React from 'react'
import { useLocation } from 'react-router-dom'

function Header({onAdd, showForm}) {
  const location = useLocation();

  return (
    <header className='header'>
        <h2>Task Tracker</h2>
        {location.pathname==='/' && <button style={{marginLeft:"30px"}} className={`btn ${showForm?'btn-secondary':'btn-primary'}`} onClick={onAdd}>{`${showForm?'Close':'Add'}`}</button>}
    </header>
  )
}

Header.defaultProps = {
}

Header.propTypes = {
}
export default Header