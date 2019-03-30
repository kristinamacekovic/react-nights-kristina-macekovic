import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../global/presets'

const headerFonts = css`
  font-family: circular, serif;
  font-weight: 700;
  color: ${theme.color.purple};
  text-transform: uppercase;
  ${textAlign};
`

export const H1 = styled.h1`
  ${headerFonts};
  text-align: center;
`

export const H3 = styled.h3`
  ${headerFonts}
`
