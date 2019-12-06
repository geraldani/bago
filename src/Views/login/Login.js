import React from 'react'
import GenericCard from '../common/cards/genericCard/GenericCard'
import HeaderCard from '../common/cards/genericCard/HeaderCard'
import Title from '../common/title/Title'
import BodyCard from '../common/cards/genericCard/BodyCard'
import Form from '../common/Form/form/form'
import FooterCard from '../common/cards/genericCard/FooterCard'
import Button from '../common/button/Button'

const BottomButtons = () => (
  <div>
    <div className='centrado'>
      <Button btn-style='simple-primary' className='font-weight-bold font-italic' size='sm'>
        Olvidé mi
        contraseña
      </Button>
    </div>
    <div className='centrado'>
      <span className='text-sm btn-padding'>¿No tenés cuenta?</span>
      <Button btn-style='simple-primary' size='sm' className='font-weight-bold'>Registrate</Button>
    </div>
  </div>
)

const Login = () => {
  const formStructure = [
    {
      type: 'email',
      name: 'email',
      label: 'Email'
    },
    {
      type: 'password',
      name: 'pass',
      label: 'Contraseña'
    }
  ]

  return (
    <div>
      <div className='row justify-content-center py-5'>
        <div className='col-12 col-md-7 col-lg-5 px-5 px-md-0'>
          <GenericCard>
            <HeaderCard>
              <Title>Iniciar sesión</Title>
            </HeaderCard>
            <BodyCard>
              <Form structure={formStructure} />
            </BodyCard>
            <FooterCard>
              <Button block>Aceptar</Button>
              <BottomButtons />
            </FooterCard>
          </GenericCard>
        </div>
      </div>
    </div>
  )
}

export default Login
