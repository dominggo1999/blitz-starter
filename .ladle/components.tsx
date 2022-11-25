import type { GlobalProvider } from "@ladle/react"
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useHotkeys } from "@mantine/hooks"
// eslint-disable-next-line import/no-unresolved
import { useLadleContext, ActionType, ThemeState } from "@ladle/react"
import "./style.css"
import React from "react"

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const { dispatch } = useLadleContext()

  useHotkeys([
    [
      "ctrl+J",
      () => {
        dispatch({
          type: ActionType.UpdateTheme,
          value: globalState.theme === ThemeState.Dark ? ThemeState.Light : ThemeState.Dark,
        })
      },
    ],
  ])

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: globalState.theme as "dark" | "light",
      }}
    >
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  )
}
