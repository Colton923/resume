'use client'

import { MantineProvider } from '@mantine/core'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        colors: {
          dark: [
            '#1a1a1a',
            '#2a2a2a',
            '#3a3a3a',
            '#4a4a4a',
            '#5a5a5a',
            '#6a6a6a',
            'rgba(122, 122, 122, 0)',
          ],
        },
      }}
    >
      {children}
    </MantineProvider>
  )
}
