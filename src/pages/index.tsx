import React, { useState, Suspense } from 'react'
import { BlitzPage } from '@blitzjs/next'
import { ColorPicker, Text, Stack } from '@mantine/core'
import { NumberInput } from '@mantine/core'
import Button from 'components/Hello'
import logout from 'src/auth/mutations/logout'
import { useMutation } from '@blitzjs/rpc'
import { useRouter } from 'next/router'
import { Routes } from '@blitzjs/next'
import { useCurrentUser } from 'src/users/hooks/useCurrentUser'
import { useSession } from '@blitzjs/auth'

const UserInfo = () => {
  const user = useCurrentUser()

  return <p>{user?.email}</p>
}

const Home: BlitzPage = () => {
  const { isLoading } = useSession({ suspense: false })
  const router = useRouter()
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)')

  const [logoutMutation] = useMutation(logout, {
    async onSuccess() {
      await router.push(Routes.LoginPage())
    },
  })

  if (isLoading) {
    return <p>Loading..</p>
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: value,
          paddingBottom: '200px',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <UserInfo />
        </Suspense>
        <Button>Hello World</Button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque.</p>
      </div>

      <Stack align="center">
        <ColorPicker format="rgba" value={value} onChange={onChange} />
        <Text>{value}</Text>
      </Stack>

      <button onClick={() => logoutMutation()}>Logout</button>

      <NumberInput defaultValue={18} placeholder="Your age" label="Your age" withAsterisk />
    </div>
  )
}

Home.authenticate = {
  redirectTo: Routes.LoginPage(),
}

export default Home
