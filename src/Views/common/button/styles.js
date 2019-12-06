import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import {
  color,
  fontSize,
  borderRadius,
  gridBreakpoints,
  globalSizes,
  borderWidth
} from '../../../styles/GlobalVariables'
import { Shadow } from '../../../styles/GlobalStyles'

// line height
const btnLineHeight = 1.2
const btnFontWeight = 'bold'
const btnBorderWidth = borderWidth.md

// padding x
const btnPaddingX = {
  sm: 0.8 + 'rem',
  md: 1.333 + 'rem',
  lg: 2.667 + 'rem'
}

// padding y
const btnPaddingY = {
  sm: 0.4 + 'rem',
  md: 0.6667 + 'rem',
  lg: 1.067 + 'rem'
}

// font sizes
const btnFont = {
  sm: fontSize.sm,
  md: fontSize.md,
  lg: fontSize.lg
}

// border radius
const btnBorderRadius = {
  sm: borderRadius.xs,
  md: borderRadius.sm,
  lg: borderRadius.lg,
  none: borderRadius.none
}

const btnColor = {
  primary: color.primary,
  secondary: color.secondary,
  primaryHover: color.primary + 'd6',
  secondaryHover: color.secondary + 'd6',
  colorPrimary: color.black,
  colorSecondary: color.back
}

const findSize = (size) => globalSizes.find(e => e === size)

const ButtonStylesTypes = {
  primary: css`
    background-color: ${btnColor.primary};
    color: ${btnColor.colorPrimary};
    border-color: ${btnColor.primary};
    &:hover{
    transform: scale(1.05);

  }`,
  secondary: css`
    background-color: ${btnColor.secondary};
    color: ${btnColor.colorSecondary};
    border-color: ${btnColor.secondary};
    &:hover{
      color: ${btnColor.colorSecondary};
      background-color: ${btnColor.secondaryHover};
      border-color: ${btnColor.secondaryHover};

  }`,
  'outline-primary': css`
    background-color: transparent;
    color: ${btnColor.primary};
    border-color: ${btnColor.primary};
     &:hover{
      color: ${btnColor.colorPrimary};
      background-color: ${btnColor.primary};
  }`,
  'outline-secondary': css`
    background-color: transparent;
    color: ${btnColor.secondary};
    border-color: ${btnColor.secondary}!important;
     &:hover{
      color: ${btnColor.colorSecondary};
      background-color: ${btnColor.secondary};
  }`,
  'simple-primary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${btnColor.primary};
    padding: ${btnPaddingY.sm} ${btnPaddingX.sm}!important;
    border-radius: ${btnBorderRadius.xs}!important;
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${btnColor.primaryHover};
    }
  `,
  'simple-secondary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${btnColor.secondary};
    padding: ${btnPaddingY.sm} ${btnPaddingX.sm}!important;
    border-radius: ${btnBorderRadius.xs}!important;
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${btnColor.secondaryHover};
    }
  `
}

const ShadowStyles = {
  none: css` box-shadow: none; `,
  normal: Shadow.shadow,
  onhover: css`
    ${Shadow.noShadow};
    &:hover{
      ${Shadow.shadow};
    }`,
  onhoverout: css`
    ${Shadow.shadow};
    &:hover{
      ${Shadow.noShadow};
    }`
}

const buttonSize = (paddingX, paddingY, fontSize) => css`
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};`

const blockButton = css`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: ${btnBorderRadius.block};`

const buttonDisable = css` 
  background-color: ${color.grayLight};
  color: ${color.white};
  cursor: not-allowed;
  pointer-events: none;
  border-color: ${color.grayLight};`

const findButtonSize = (size) => {
  const elem = findSize(size)
  return buttonSize(btnPaddingX[elem], btnPaddingY[elem], btnFont[elem])
}

const commosStyles = css`
  border: ${btnBorderWidth} solid;
  font-weight: ${btnFontWeight};
  transition: background-color 250ms, transform 90ms linear, box-shadow 300ms ease-in-out;
  line-height: ${btnLineHeight};
  text-transform: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  width: auto;
  margin-bottom: 0.5rem;
  display: inline-block;
  //shadows
  ${props => ShadowStyles[Object.keys(ShadowStyles).find(e => e === props.shadow)]};
  
  ${props => ButtonStylesTypes[Object.keys(ButtonStylesTypes).find(style => props.btntype === style)]};
  
  //buttonSize
  ${props => findButtonSize(props.size)};
  
  //border-radius
  border-radius: ${props => btnBorderRadius[Object.keys(btnBorderRadius).find(e => e === props.radius)]};
  
  //block
  ${props => typeof (props.block) === 'boolean' && props.block && blockButton}
  
  //disabled
  ${props => props.disabled && buttonDisable};
 
  &:active {
    transform: scale(0.9);
  }
  &:focus { 
    box-shadow: none;
    outline: none;
  }
  &:hover{
    text-decoration: none;
    ${props => props.disabled && buttonDisable};
  }

  //medias
  @media(max-width: ${gridBreakpoints.md}){
    ${props => props.block === 'md' && blockButton};
  }
  @media(max-width: ${gridBreakpoints.sm}){
    ${props => props.block === 'sm' && blockButton};
    font-size: ${fontSize.sm};
  }
`

const StyledButton = styled.button`${commosStyles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${commosStyles}` // para renderizar un link (a) con los mismos estilos

export { StyledButton, StyledLink }
