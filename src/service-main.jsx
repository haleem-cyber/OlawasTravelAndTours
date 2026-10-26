import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ServicePage from './ServicePage.jsx'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <ServicePage page={root.dataset.service} />
  </StrictMode>,
)