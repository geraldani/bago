import React from 'react'
import GenericCard from '../common/cards/genericCard/GenericCard'
import HeaderCard from '../common/cards/genericCard/HeaderCard'
import Title from '../common/title/Title'
import BodyCard from '../common/cards/genericCard/BodyCard'
import Button from '../common/button/Button'
import FooterCard from '../common/cards/genericCard/FooterCard'
import Input from '../common/Form/inputs/generic/Input'

const Register = () => {
  return (
    <div className='row justify-content-center py-5'>
      <div className='col-12 col-md-6'>
        <GenericCard>
          <HeaderCard>
            <Title>Registrate</Title>
          </HeaderCard>
          <BodyCard>
            <Input type='text' name='name' label='Nombre' />
          </BodyCard>
          <FooterCard>
            <Button block>Aceptar</Button>
          </FooterCard>
        </GenericCard>
      </div>
    </div>
  )
}

export default Register
