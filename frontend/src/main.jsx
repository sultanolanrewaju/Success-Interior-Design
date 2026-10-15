import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter} from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
})

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
    </HelmetProvider>
  )
}