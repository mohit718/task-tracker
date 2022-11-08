import React from 'react'
import PropTypes from 'prop-types'

function Header({onAdd, showForm}) {
  return (
    <header className='header'>
        <h2>Task Tracker</h2>
        <button style={{marginLeft:"30px"}} className={`btn ${showForm?'btn-danger':'btn-sucess'}`} onClick={onAdd}>{`${showForm?'Close':'Add'}`}</button>
    </header>
  )
}

Header.defaultProps = {
}

Header.propTypes = {
}
export default Header