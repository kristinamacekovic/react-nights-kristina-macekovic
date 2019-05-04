import React, { FC } from 'react'
import { LoaderWrap, StyledLoader, Circular, Path } from './styled'

export type LoaderProps = {
  props?: {
    small?: boolean
  }
}

export const Loader: FC<LoaderProps> = props => (
  <LoaderWrap {...props}>
    <StyledLoader>
      <Circular viewBox="25 25 50 50">
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="4"
          {...props}
        />
      </Circular>
    </StyledLoader>
  </LoaderWrap>
)
