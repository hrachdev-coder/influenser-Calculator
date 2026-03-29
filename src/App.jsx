import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ToolsPage = lazy(() => import('./pages/ToolsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 text-sm text-[var(--muted)]">
          Loading Creator Deal Assistant...
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
