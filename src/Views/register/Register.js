import React from 'react'
import GenericCard from '../common/cards/genericCard/GenericCard'
import HeaderCard from '../common/cards/genericCard/HeaderCard'
import Title from '../common/title/Title'
import BodyCard from '../common/cards/genericCard/BodyCard'
import Button from '../common/button/Button'
import FooterCard from '../common/cards/genericCard/FooterCard'
import Form from '../common/Form/form/form'
import { routesPaths } from '../utils'

const Register = () => {
  const formStructure = [
    {
      type: 'text',
      name: 'name',
      label: 'Nombre'
    },
    {
      type: 'text',
      name: 'direction',
      label: 'Direccion'
    },
    {
      type: 'select',
      name: 'personType',
      label: 'Seleccione el tipo de usuario que eres',
      options: [
        { name: 'Distribuidor', value: 'dist' },
        { name: 'Farmacia', value: 'farm' },
        { name: 'Administrador', value: 'admin' }
      ]
    },
    {
      type: 'text',
      name: 'cuit',
      label: 'CUIT'
    },
    {
      type: 'password',
      name: 'pass',
      label: 'Contraseña'
    }
  ]

  return (
    <div className='row justify-content-center py-5'>
      <div className='col-12 col-md-7 col-lg-5 px-5 px-md-0'>
        <GenericCard>
          <HeaderCard>
            <Title>Registrate</Title>
          </HeaderCard>
          <BodyCard>
            <Form structure={formStructure} />
          </BodyCard>
          <FooterCard>
            <Button block link={routesPaths.login}>Aceptar</Button>
          </FooterCard>
        </GenericCard>
      </div>
    </div>
  )
}

export default Register
