import styled from 'styled-components'
import { borderRadius, borderWidth, color, marginsPaddings } from '../../../../styles/GlobalVariables'

const paddingCard = marginsPaddings.lg

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${color.white};
  background-clip: border-box;
  border: solid ${borderWidth.thin} ${color.border};
  border-radius: ${borderRadius.sm};
  padding: ${paddingCard};
`

const StyledHeaderCard = styled.div`
  position: relative;
  padding-bottom: ${paddingCard};
  &:before{
    content: '';
    position: absolute;
    width: calc(100% + (${paddingCard}*2));
    height: ${borderWidth.thin};
    bottom:0;
    left: -${paddingCard};
    background-color: ${color.border};
  }
`

const StyledHeaderBody = styled.div`
  padding-top: ${paddingCard};
`

const StyledHeaderFooter = styled.div`

`

export {
  StyledCard,
  StyledHeaderCard,
  StyledHeaderBody,
  StyledHeaderFooter
}
