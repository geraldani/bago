import React from 'react'
import { StyledHeaderBody } from './styles'

const BodyCard = ({ children }) => {
  return (
    <StyledHeaderBody>
      {children}
    </StyledHeaderBody>
  )
}

export default BodyCard
