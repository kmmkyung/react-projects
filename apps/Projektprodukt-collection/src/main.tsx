import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/router.tsx'
import './index.css'
import { ScrollLockProvider } from './context/ScrollLockProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollLockProvider>
      <RouterProvider router={Router}/>
    </ScrollLockProvider>
  </StrictMode>,
)
