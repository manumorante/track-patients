import { useSearchPatients } from '@/hooks'
import { usePatientsStore } from '@/stores/patientsStore'
import cx from 'clsx'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import { ActionMenu } from '../common'
import { PencilIcon } from '@heroicons/react/24/outline'
import { formatDate } from '@/lib/utils'

export default function PatientsTable() {
  const searchQuery = usePatientsStore((state) => state.searchQuery)
  const editForm = usePatientsStore((state) => state.editForm)
  const { results: patients, isLoading } = useSearchPatients(searchQuery)
  const hasResults = useMemo(() => patients?.length !== 0, [patients])

  const css = {
    th: 'px-4 py-3 text-left text-xs font-light text-zinc-500 uppercase',
    td: 'px-4 py-3 text-sm',
  }

  return (
    <div>
      {!hasResults && <div className="text-gray-500">No results found.</div>}
      {hasResults && !isLoading && (
        <Card className="w-full overflow-hidden">
          <table className="w-full table-auto">
            <thead className="border-b border-zinc-200 bg-zinc-50">
              <tr>
                <th className={css.th}>Patient</th>
                <th className={cx(css.th, 'hidden sm:table-cell')}>Age</th>
                <th className={cx(css.th, 'hidden sm:table-cell')}>Primary Condition</th>
                <th className={cx(css.th, 'hidden sm:table-cell')}>Created</th>
                <th className={cx(css.th, 'hidden sm:table-cell')}>Updated</th>
                <th className={cx(css.th, 'text-right')}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients?.map((patient) => (
                <tr key={patient.id} className="border-b border-zinc-200 bg-white hover:bg-zinc-50">
                  <td className={css.td}>
                    <div className="flex flex-col">
                      <Link to={`/patients/${patient.id}`} className="font-medium">
                        {patient.name}
                      </Link>
                      <div className="mt-1 flex flex-col gap-0.5 text-xs text-gray-500 sm:hidden">
                        <span>{patient.age} years</span>
                        <span>{patient.primaryCondition}</span>
                        <span>Created: {formatDate(patient.createdAt)}</span>
                      </div>
                    </div>
                  </td>
                  <td className={cx(css.td, 'hidden sm:table-cell')}>{patient.age} years</td>
                  <td className={cx(css.td, 'hidden sm:table-cell')}>{patient.primaryCondition}</td>
                  <td className={cx(css.td, 'hidden sm:table-cell')}>
                    {formatDate(patient.createdAt)}
                  </td>
                  <td className={cx(css.td, 'hidden sm:table-cell')}>
                    {formatDate(patient.updatedAt)}
                  </td>
                  <td className={cx(css.td, 'w-20 text-right')}>
                    <ActionMenu
                      actions={[
                        {
                          label: 'Edit patient',
                          icon: PencilIcon,
                          onClick: () => editForm(patient.id),
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  )
}
