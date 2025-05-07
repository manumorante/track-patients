import { useSearchPatients } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import { useMemo } from 'react'
import cx from 'clsx'
import { Link } from 'react-router-dom'

export default function PatientsList() {
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const { results: patients, isLoading } = useSearchPatients(searchQuery)
  const hasResults = useMemo(() => patients?.length !== 0, [patients])

  const css = {
    th: 'px-4 py-3 pl-8 text-left text-xs font-light text-zinc-500 uppercase',
    td: 'px-4 py-3 pl-8',
  }

  return (
    <div>
      {isLoading && <div className="text-gray-500">Searching...</div>}
      {!hasResults && <div className="text-gray-500">No results found.</div>}
      {hasResults && !isLoading && (
        <div className="w-full overflow-hidden rounded-lg border border-zinc-200 shadow-xs">
          <table className="w-full table-auto">
            <thead className="border-b border-zinc-200 bg-zinc-50">
              <tr>
                <th className={css.th}>Name</th>
                <th className={css.th}>Age</th>
                <th className={css.th}>Primary Condition</th>
              </tr>
            </thead>

            <tbody>
              {patients?.map((patient) => (
                <tr className="border-b border-zinc-200 bg-white p-4 hover:bg-zinc-50">
                  <td className={cx(css.td, 'font-medium')}>
                    <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
                  </td>
                  <td className={css.td}>{patient.age} years</td>
                  <td className={css.td}>{patient.primaryCondition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
