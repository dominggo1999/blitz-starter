import { AuthClientPlugin } from '@blitzjs/auth'
import { setupBlitzClient } from '@blitzjs/next'
import { BlitzRpcPlugin } from '@blitzjs/rpc'

export const authConfig = {
  cookiePrefix: 'blitz-starter',
}

export const { withBlitz } = setupBlitzClient({
  plugins: [AuthClientPlugin(authConfig), BlitzRpcPlugin({})],
})
