import type { Patient } from '@/types'

export const patients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    primaryCondition: 'Diabetes',
    createdAt: '2024-03-10T10:30:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 52,
    primaryCondition: 'Hypertension',
    createdAt: '2024-03-12T14:20:00Z',
  },
  {
    id: '3',
    name: 'Robert Johnson',
    age: 67,
    primaryCondition: 'Arthritis',
    createdAt: '2024-03-13T09:15:00Z',
  },
  {
    id: '4',
    name: 'Maria García',
    age: 38,
    primaryCondition: 'Asthma',
    createdAt: '2024-03-14T11:45:00Z',
    updatedAt: '2024-03-15T12:52:00Z',
  },
  {
    id: '5',
    name: 'David Chen',
    age: 59,
    primaryCondition: 'Heart Disease',
    createdAt: '2024-03-15T13:10:00Z',
  },
  {
    id: '6',
    name: 'Sarah Williams',
    age: 41,
    primaryCondition: 'Multiple Sclerosis',
    createdAt: '2024-03-16T15:30:00Z',
  },
  {
    id: '7',
    name: 'Michael Brown',
    age: 73,
    primaryCondition: 'COPD',
    createdAt: '2024-03-17T16:45:00Z',
  },
  {
    id: '8',
    name: 'Emily Taylor',
    age: 29,
    primaryCondition: 'Type 1 Diabetes',
    createdAt: '2024-03-18T10:20:00Z',
  },
]
