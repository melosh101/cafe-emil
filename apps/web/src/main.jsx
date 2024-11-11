import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import './index.css'
import { LandingPage } from './pages/landing'
import { Layout } from './layout'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
