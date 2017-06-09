import React from 'react'

const CheckBox = props => {
  return (
    <div>
      <input className={props.className} type="checkbox" />
      <label htmlFor={props.className}>{props.children}</label>
    </div>
  )
}

export default CheckBox
