import React, { Children } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = withRouter(({ router, children, ...props }: any) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      isActive: router.pathname === props.href ? true : false
    })}
  </Link>
))

export default ActiveLink
