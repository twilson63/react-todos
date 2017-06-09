import React from 'react'

const CheckBox = props => {
  return (
    <div>
      <input
        id={props.className}
        className={props.className}
        onChange={props.onChange}
        type="checkbox"
      />
      <label htmlFor={props.className}>{props.children}</label>
    </div>
  )
}

export default CheckBox
