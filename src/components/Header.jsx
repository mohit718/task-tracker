import React from 'react'
import PropTypes from 'prop-types'

function Header({onAdd, showForm}) {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <button style={{"margin-left":"30px"}} className={`btn ${showForm?'btn-danger':'btn-sucess'}`} onClick={onAdd}>{`${showForm?'Close':'Add'}`}</button>
    </header>
  )
}

Header.defaultProps = {
}

Header.propTypes = {
}
export default Header