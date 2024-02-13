import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1> Header - {props.title} </h1>
    </div>
  )
}

Header.defaultProps = {
  title: "def"
}

export default Header