import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './ConfigRoutes.jsx'
import ContextRoot from './ContextConfig.jsx'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextRoot>
      <RouterProvider router={router}/>
    </ContextRoot>
  </StrictMode>,
)
