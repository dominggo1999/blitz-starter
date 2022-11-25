import { BlitzPage } from '@blitzjs/next'
import Layout from 'src/core/layouts/Layout'
import { LoginForm } from 'src/auth/components/LoginForm'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Log In">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : '/'
          return router.push(next)
        }}
      />
      <Link href="/api/auth/google">
        <a>Login With Google</a>
      </Link>
    </Layout>
  )
}

LoginPage.redirectAuthenticatedTo = '/'

export default LoginPage
