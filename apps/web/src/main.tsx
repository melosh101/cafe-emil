import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { LandingPage } from './pages/landing'
import { Layout } from './layout'
import "./index.css";
import Resever from './pages/resever'
import Menu from './pages/menu'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const root = document.getElementById('root');
const queryClient = new QueryClient()

if (!root) {
  throw new Error('No root element found')
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/resever" element={<Resever />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
