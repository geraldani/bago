import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledSelect } from './styles'
import { LabelBlock } from '../../label/Label'
import ElementSelected from './ElementSelected'
import { sortArray } from '../../../../utils'

const Select = ({ options, placeholder, label, multiple, onChange, name }) => {
  const [selectedElement, setSelectedElement] = useState(multiple ? [] : '')
  const [newOption, setNewOption] = useState(sortArray(options, 'asc', 'value'))
  const [multipleOptionTitle, setMultipleOptionTitle] = useState(placeholder)

  const onRemoveElement = (e) => {
    const removeName = e.target.previousSibling.innerHTML // el nombre del elementp a ser removido del select
    const removeValue = selectedElement.find(ele => ele.name === removeName).value // el value del elementp a ser removido del select
    setNewOption(sortArray(newOption.concat([{ name: removeName, value: removeValue }]), 'asc', 'value'))// agrego ese elmento de nuevo al select
    setSelectedElement(selectedElement.filter(elem => elem.name !== removeName))// y quito ese elemento de los seleccionados
  }

  const handleChange = (e) => {
    let valueName = ''
    const targetValue = e.target.value
    if (multiple) {
      e.target.childNodes.forEach(ele => {
        if (ele.getAttribute('value') === targetValue) valueName = ele.getAttribute('name')
      })
      setSelectedElement(selectedElement.concat([{ name: valueName, value: targetValue }]))
      setNewOption(newOption.filter(elem => elem.value.toString() !== targetValue.toString()))
    } else {
      setSelectedElement(targetValue)
    }
    if (onChange) onChange(e)
  }

  useEffect(() => {
    if (selectedElement.length > 0 && multiple) {
      let pluralName = 'option'
      if (selectedElement.length > 1) pluralName += 's'
      setMultipleOptionTitle(`${selectedElement.length} ${pluralName} selected`)
    } else setMultipleOptionTitle(placeholder)
  }, [selectedElement.length])

  return (
    <div>
      <LabelBlock marginBottom={multiple && setSelectedElement.length === 0}>
        {label}
        <StyledSelect name={name} multi={multiple} onChange={handleChange}>
          <option value=''>{multipleOptionTitle}</option>
          {
            newOption.map(option => (
              <option value={option.value} key={option.name} name={option.name}>
                {option.name}
              </option>
            ))
          }
        </StyledSelect>
      </LabelBlock>
      {
        multiple &&
        <div>
          {selectedElement.map(el => <ElementSelected key={el.name} element={el.name} onClick={onRemoveElement} />)}
        </div>
      }
    </div>
  )
}

Select.defaultProps = {
  options: [],
  placeholder: 'Seleccione una opcion'
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired
}

export default Select
