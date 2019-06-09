import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ActiveLink from './ActiveLink'

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`

const StyledLink = styled.a`
  margin-right: 15px;
  cursor: pointer;
  ${(props: any) =>
    props.isActive &&
    css`
      color: red;
      text-decoration: underline;
    `};
`

const Header = () => (
  <Container>
    <ActiveLink prefetch href="/">
      <StyledLink>Home</StyledLink>
    </ActiveLink>
    <ActiveLink prefetch href="/about">
      <StyledLink>About</StyledLink>
    </ActiveLink>
  </Container>
)

export default Header
