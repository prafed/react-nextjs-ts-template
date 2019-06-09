import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import Header from './Header'

const theme = {
  fonts: {
    primary: 'system-ui'
  },
  colors: {
    primary: 'hotpink',
    secondary: 'darkorchid',
    tertiary: 'orange',
    default: '#1B1D1D',
    disabled: 'Gainsboro'
  }
}

const Container = styled.div`
  margin: 3em;
`

const withLayout = (Page: any) => () => (
  <Container>
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.primary};
            background-color: whitesmoke;
          }

          * {
            color: ${theme.colors.default};
          }

          a {
            color: ${theme.colors.secondary};
          }

          a:hover {
            color: ${theme.colors.primary};
          }
        `}
      />
      <Header />
      <Page />
    </ThemeProvider>
  </Container>
)

export default withLayout
