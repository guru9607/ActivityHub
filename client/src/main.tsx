import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //React Strict Mode is used in development to detect bugs by intentionally re-running lifecycle logic like effects and cleanup to ensure code is safe and properly handled.
  <StrictMode>
    <App />
  </StrictMode>,
)
