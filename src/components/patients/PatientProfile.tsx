import { Card, Error } from '@/components/common'
import { usePatient } from '@/hooks'
import type { Patient } from '@/types'

type Props = {
  id: Patient['id']
}

export default function PatientProfile({ id }: Props) {
  const { data: patient, isLoading } = usePatient(id ?? '')

  if (isLoading) return <Skeleton />

  if (!id || !patient) {
    return <Error message="Patient not found" />
  }

  return (
    <Card className="Profile w-full min-w-80 flex-1 space-y-4 p-6 md:w-auto md:p-8">
      <h1 className="text-2xl">{patient.name}</h1>
      <p className="">
        <span className="text-sm text-gray-400 uppercase">Age</span>{' '}
        <div className="text-lg text-gray-600">{patient.age} year old</div>
      </p>

      <p className="text-gray-400">
        <span className="text-sm text-gray-400 uppercase">Primary Condition</span>{' '}
        <div className="text-lg text-gray-600">{patient.primaryCondition}</div>
      </p>
    </Card>
  )
}

const Skeleton = () => (
  <Card className="Profile w-full min-w-80 flex-1 space-y-4 p-6 md:w-auto md:p-8">
    <div className="h-8 w-48 animate-pulse rounded-md bg-zinc-100" />
    <div className="space-y-2">
      <div className="h-4 w-16 animate-pulse rounded-md bg-zinc-100" />
      <div className="h-6 w-24 animate-pulse rounded-md bg-zinc-100" />
    </div>
    <div className="space-y-2">
      <div className="h-4 w-32 animate-pulse rounded-md bg-zinc-100" />
      <div className="h-6 w-40 animate-pulse rounded-md bg-zinc-100" />
    </div>
  </Card>
)
