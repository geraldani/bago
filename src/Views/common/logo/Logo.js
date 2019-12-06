import React from 'react'
import { StyledLinkImage } from './styles'
import logo from '../../../assets/img/SampleLogo.png'

const Logo = ({ className = '' }) => {
  return (
    <StyledLinkImage className={className} to='/'>
      <img
        src={logo}
        alt='brand'
        className='img-fluid'
      />
    </StyledLinkImage>
  )
}

export default Logo
