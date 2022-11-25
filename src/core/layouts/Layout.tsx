import Head from 'next/head'
import React, { FC } from 'react'
import { BlitzLayout } from '@blitzjs/next'

const a = 'Test'

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'blitz-starter'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
