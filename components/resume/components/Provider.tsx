'use client'

import { MantineProvider } from '@mantine/core'

export default function Provider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={{ colorScheme: 'dark' }}>{children}</MantineProvider>
}
