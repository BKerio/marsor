import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'
import HomePage from './pages/HomePage'
import CmsPage from './pages/CmsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":slug" element={<CmsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
