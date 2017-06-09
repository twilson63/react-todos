import React from 'react'

import CheckBox from '../components/checkbox'

const ToggleAll = props => {
  return (
    <CheckBox className="toggle-all" onChange={e => props.toggleAllCompleted()}>
      Mark all as complete
    </CheckBox>
  )
}

export default ToggleAll
