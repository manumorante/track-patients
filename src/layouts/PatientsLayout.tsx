import { Outlet } from 'react-router-dom'

export default function PatientsLayout() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Patients</h1>
      <Outlet />
    </>
  )
}
