import styled from 'styled-components'
import presets from '../../global/presets'

export const Button = styled.button`
  background: ${({ disabled }) =>
    disabled ? presets.color.gray : presets.color.teal};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${presets.border.basic};
  color: ${presets.color.white};
`
