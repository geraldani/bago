import React from 'react'
import PropTypes from 'prop-types'
import Input from '../inputs/generic/Input'
import Select from '../inputs/select/Select'

const Form = ({ structure }) => {
  return (
    <form className='w-100'>
      {
        structure.map(input => {
          if (input.type === 'select') return <Select key={input.name} {...input} />
          else if (input.type === 'select-multiple') return <Select key={input.name}  {...input} multiple />
          else return <Input key={input.name}  {...input} />
        })
      }
    </form>
  )
}

Form.prototype = {
  structure: PropTypes.array.isRequired
}
export default Form
