import React from 'react'
import { StyledCard } from './styles'

const GenericCard = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default GenericCard
