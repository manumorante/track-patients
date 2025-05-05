import { Layout } from '@/components'
import { HomePage, PatientDetailPage, PatientListPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/patients/:id" element={<PatientDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
