import styled from 'styled-components/macro'
import presets from '../../../../global/presets'

export const ProductDetailWrapper = styled.article`
  width: 50rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  border: ${presets.border.basic};
  box-shadow: ${presets.shadow.lively};
`

export const Description = styled.section`
  margin: 2rem;
`

export const Accent = styled.span`
  color: ${presets.color.pink};
  font-weight: bold;
`

/* export const Inventory = styled.div`
  color: ${presets.color.red};
  text-transform: uppercase;
`

export const Available = styled.section`
  color: green;
  text-transform: uppercase;
`
export const NotAvailable = styled.section`
  color: ${presets.color.red};
  text-transform: uupercase;
` */

export const ProductDetailImgWrap = styled.div`
  height:30rem;
  height: 30rem;
  margin: auto;
`

export const ProductDetailImg = styled.img`
  max-height: 30rem;
  max-width: 100%;
  margin: auto;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
  margin: auto;
`

export const ProductDetailTitle = styled.h3`
  font-size: ${presets.fontSize.xLarge};
  padding: 2rem;
  text-transform: uppercase;
  margin: auto;
  color: ${presets.color.purple};
`
