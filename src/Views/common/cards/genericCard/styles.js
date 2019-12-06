import styled from 'styled-components'
import { borderRadius, borderWidth, color, marginsPaddings } from '../../../../styles/GlobalVariables'

const paddingCard = marginsPaddings.lg
const cardBorderWidth = borderWidth.sm
const cardBorderRadius = borderRadius.sm

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${color.white};
  background-clip: border-box;
  border: solid ${cardBorderWidth} ${color.border};
  border-radius: ${cardBorderRadius};
  padding: ${paddingCard};
`

const StyledHeaderCard = styled.div`
  position: relative;
  padding-bottom: ${paddingCard};
  &:before{
    content: '';
    position: absolute;
    width: calc(100% + (${paddingCard}*2));
    height: ${cardBorderWidth};
    bottom:0;
    left: -${paddingCard};
    background-color: ${color.border};
  }
`

const StyledHeaderBody = styled.div`
  padding-top: ${paddingCard};
`

const StyledHeaderFooter = styled.div`
  padding-top: ${paddingCard};
`

export {
  StyledCard,
  StyledHeaderCard,
  StyledHeaderBody,
  StyledHeaderFooter
}
