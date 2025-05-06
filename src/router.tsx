import { MainLayout } from '@/layouts'
import { HomePage, PatientDetailPage, PatientListPage, LatestNotesPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/patients/:id" element={<PatientDetailPage />} />
          <Route path="/notes" element={<LatestNotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
