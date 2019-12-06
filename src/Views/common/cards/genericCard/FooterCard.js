import React from 'react'
import { StyledHeaderFooter } from './styles'

const FooterCard = ({ children }) => {
  return (
    <StyledHeaderFooter>
      {children}
    </StyledHeaderFooter>
  )
}

export default FooterCard
