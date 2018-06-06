import React from 'react'
import App, { Container } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'

// Utilities
import theme from '../utils/theme'

// Local
import Sidebar from '../components/shared/Sidebar'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    console.log(router)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Layout>
            {route != '/login' ? (
              <SidebarWrapper>
                <Sidebar />
              </SidebarWrapper>
            ) : (
              ''
            )}
            <Body>
              <Component {...pageProps} />
            </Body>
          </Layout>
        </Container>
      </ThemeProvider>
    )
  }
}

// Styles
const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  font-family: ${p => p.theme.mainFont};
`

const Body = styled.div`
  flex-grow: 1;

  padding-top: 30px;
  padding-left: 5px;
  padding-right: 22px;
`

const SidebarWrapper = styled.div`
  width: 180px;
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 0;

  padding-top: 30px;
  padding-right: 14px;
  padding-left: 14px;

  background: ${p => p.theme.mainBgColor};
`
