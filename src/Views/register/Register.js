import React from 'react'
import GenericCard from '../common/cards/genericCard/GenericCard'
import HeaderCard from '../common/cards/genericCard/HeaderCard'
import Title from '../common/title/Title'
import BodyCard from '../common/cards/genericCard/BodyCard'

const Register = () => {
  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-6">
        <GenericCard>
          <HeaderCard>
            <Title>Registrate</Title>
          </HeaderCard>
          <BodyCard>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor efficitur leo, vitae iaculis turpis
              posuere vitae. Etiam odio dui, auctor non purus eu, auctor luctus sem. Vestibulum a porta elit. Nulla eu
              tristique mauris, sed semper mauris. Proin at metus risus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Vivamus interdum, nisl vitae porttitor ullamcorper, velit eros
              facilisis felis, sit amet pulvinar justo augue nec nisi. Nunc id sem sed risus volutpat molestie. Donec
              interdum, nisl in venenatis lacinia, augue odio condimentum odio, aliquet dignissim lacus odio et ex.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet laoreet dapibus. Proin iaculis, lacus
              eget euismod malesuada, ligula elit iaculis leo, nec fringilla nibh magna eget diam. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>aFusce elementum nisl tellus, at dapibus eros dignissim nec. In venenatis accumsan magna, id condimentum
              neque luctus aliquet. Nulla semper ac augue ut maximus. Fusce tincidunt ut risus sed eleifend. Duis semper
              elementum laoreet. Praesent auctor quam a odio euismod, vitae pellentesque mauris porta. Ut tempus aliquam
              odio id viverra. Cras eu accumsan enim. Morbi eget sapien sed libero aliquam euismod. Vestibulum sit amet
              posuere nisl, ac consectetur nisi.</p>
          </BodyCard>
        </GenericCard>
      </div>
    </div>
  )
}

export default Register
