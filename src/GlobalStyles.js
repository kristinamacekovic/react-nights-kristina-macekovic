import 'normalize.css'
import { createGlobalStyle } from 'styled-components'

import presets from './global/presets'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'circular';
    src: url('font/CircularStd-Book.otf') format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'circular';
    src: url('font/CircularStd-Medium.otf') format('opentype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'circular';
    src: url('font/CircularStd-Bold.otf') format('opentype');
    font-weight: 400;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::after,
    &::before {
      box-sizing: border-box;
    }
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'circular', sans-serif;
    font-weight: 100;
    background-color: ${presets.color.white};
  }
  #root {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles
