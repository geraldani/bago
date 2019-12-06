const medidas = {
  px: 'px',
  em: 'em',
  rem: 'rem',
  por: '%'
}

const color = {
  primary: '#bbbbbb',
  secondary: '#dddddd',
  border: 'rgba(0, 0, 0, 0.125)',
  white: '#ffffff',
  black: '#000000'
}

const borderWidth = {
  sm: 1 + medidas.px,
  md: 2 + medidas.px,
  lg: 3 + medidas.px,
  xl: 5 + medidas.px
}

const borderRadius = {
  xs: 5 + medidas.px,
  sm: 10 + medidas.px,
  md: 25 + medidas.px,
  lg: 50 + medidas.px,
  circle: 50 + medidas.por,
  none: 0
}

const marginsPaddings = {
  none: 0,
  xs: 0.25 + medidas.rem, // m-1
  sm: 0.5 + medidas.rem, // m-2
  md: 1 + medidas.rem, // m-3
  lg: 1.5 + medidas.rem, // m-4
  xl: 3 + medidas.rem, // m-5
  xxl: 4 + medidas.rem // m-6
}

const fontSize = {
  root: 15 + medidas.px,
  base: 1 + medidas.rem,
  lg: 1.2 + medidas.rem,
  md: 1 + medidas.rem,
  sm: 0.85 + medidas.rem,
  xs: 0.6 + medidas.rem
}

const gridBreakpoints = {
  xs: 0,
  sm: 576 + medidas.px,
  md: 768 + medidas.px,
  lg: 992 + medidas.px,
  xl: 1200 + medidas.px
}

const globalSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
]

export {
  borderWidth,
  borderRadius,
  color,
  marginsPaddings,
  globalSizes,
  fontSize,
  gridBreakpoints,
  medidas
}
