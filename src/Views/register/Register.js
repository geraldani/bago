import React from 'react'
import GenericCard from '../common/cards/genericCard/GenericCard'
import HeaderCard from '../common/cards/genericCard/HeaderCard'
import Title from '../common/title/Title'
import BodyCard from '../common/cards/genericCard/BodyCard'
import Button from '../common/button/Button'
import FooterCard from '../common/cards/genericCard/FooterCard'
import Input from '../common/Form/inputs/generic/Input'
import Select from '../common/Form/inputs/select/Select'
import Form from '../common/Form/form/form'

const Register = () => {
  const selectOptions = [
    { name: 'Distribuidor', value: 'dist' },
    { name: 'Farmacia', value: 'farm' },
    { name: 'Administrador', value: 'admin' }
  ]
  return (
    <div className='row justify-content-center py-5'>
      <div className='col-12 col-md-7 col-lg-5 px-5 px-md-0'>
        <GenericCard>
          <HeaderCard>
            <Title>Registrate</Title>
          </HeaderCard>
          <BodyCard>
            <Form>
              <Input type='text' name='name' label='Nombre' />
              <Input type='text' name='direction' label='Direccion' />
              <Select name='personType' label='Soy' options={selectOptions} />
              <Input type='text' name='cuit' label='CUIT' />
              <Input type='email' name='email' label='Email' />
              <Input type='password' name='pass' label='Contraseña' />
            </Form>
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
