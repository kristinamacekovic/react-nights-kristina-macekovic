import styled from 'styled-components'

import presets from '../../global/presets'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  color: ${presets.color.purple};
`

export const StyledInput = styled.input`
  border: 2px solid
    ${({ hasError }) => (hasError ? presets.color.red : presets.color.gray)};
  border-radius: ${presets.radius.basic};
  padding: 1rem 1.2rem;
`

export const StyledError = styled.div`
  color: ${presets.color.red};
`
