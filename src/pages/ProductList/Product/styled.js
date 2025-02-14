import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import presets from '../../../global/presets'

export const Wrapper = styled.li``

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: initial;
  background-color: ${presets.color.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  width: 35rem;
  box-shadow: ${presets.shadow.lively};
  &:hover {
    box-shadow: ${presets.shadow.pink};
  }
  border: ${presets.border.basic};
`

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${presets.color.darkPurple};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
  color: ${presets.color.purple};
`

export const AddButton = styled.button`
  background: ${presets.color.teal};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${presets.radius.basic};
  color: ${presets.color.white};
`
