import { MantineSize } from '@mantine/core'

const bp = {
  xs: 500,
  sm: 800,
  md: 1000,
  lg: 1200,
  xl: 1400,
}

const mq = (n: MantineSize) => `@media (min-width: ${bp[n]}px)`

const media: Partial<Record<MantineSize, string>> = {}

;(Object.keys(bp) as Array<keyof typeof bp>).forEach((key) => {
  media[key] = mq(key)
})

export default media
