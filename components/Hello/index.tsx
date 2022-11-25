import React from 'react'
import { Button } from '@mantine/core'

const Hello: React.FC<{
  children: React.ReactElement | string
}> = ({ children }) => {
  return <Button>{children}</Button>
}

export default Hello
