import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from 'app'
import { theme } from 'resources/theme'
import 'normalize.css'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`
