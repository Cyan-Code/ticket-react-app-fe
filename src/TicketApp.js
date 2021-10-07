import React from 'react'
import { UiProvider } from './context/uiContext'
import { RouterPage } from './pages/RouterPage'

export const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  )
}
