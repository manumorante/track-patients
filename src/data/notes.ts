import type { Note } from '@/types'

export const notes: Note[] = [
  // Patient 1 - Diabetes Management
  {
    id: '1',
    patientId: '1',
    text: 'Initial diabetes consultation. HbA1c: 9.2%. Starting metformin 500mg twice daily.',
    createdAt: '2024-03-01T10:30:00Z',
    updatedAt: '2024-03-01T10:30:00Z',
  },
  {
    id: '2',
    patientId: '1',
    text: 'Follow-up: Blood sugar levels improving. HbA1c decreased to 8.2%. Continuing current medication.',
    createdAt: '2024-03-15T10:30:00Z',
    updatedAt: '',
  },
  {
    id: '3',
    patientId: '1',
    text: 'Diet consultation completed. Patient committed to Mediterranean diet plan.',
    createdAt: '2024-03-17T14:20:00Z',
    updatedAt: '2024-03-17T14:20:00Z',
  },
  {
    id: '4',
    patientId: '1',
    text: 'Foot examination: No signs of neuropathy. Recommended daily foot care routine.',
    createdAt: '2024-03-20T09:15:00Z',
    updatedAt: '',
  },

  // Patient 2 - Hypertension
  {
    id: '5',
    patientId: '2',
    text: 'Blood pressure readings elevated: 150/95. Starting lisinopril 10mg daily.',
    createdAt: '2024-03-02T11:20:00Z',
    updatedAt: '2024-03-02T11:20:00Z',
  },
  {
    id: '6',
    patientId: '2',
    text: 'BP improved to 130/85. Continuing medication. Recommended salt reduction.',
    createdAt: '2024-03-16T09:15:00Z',
    updatedAt: '',
  },
  {
    id: '7',
    patientId: '2',
    text: '24-hour BP monitoring completed. Average readings within target range.',
    createdAt: '2024-03-18T11:30:00Z',
    updatedAt: '2024-03-18T11:30:00Z',
  },

  // Patient 3 - Orthopedic
  {
    id: '8',
    patientId: '3',
    text: 'Initial assessment for knee osteoarthritis. X-ray shows moderate degeneration.',
    createdAt: '2024-03-03T14:45:00Z',
    updatedAt: '',
  },
  {
    id: '9',
    patientId: '3',
    text: 'Started physical therapy program. Initial range of motion: 0-90 degrees.',
    createdAt: '2024-03-14T11:45:00Z',
    updatedAt: '2024-03-14T11:45:00Z',
  },
  {
    id: '10',
    patientId: '3',
    text: 'PT progress: Range improved to 0-110 degrees. Pain decreased by 40%.',
    createdAt: '2024-03-21T13:20:00Z',
    updatedAt: '',
  },
  {
    id: '11',
    patientId: '3',
    text: 'Injected corticosteroid for pain management. Will reassess in 2 weeks.',
    createdAt: '2024-03-25T15:30:00Z',
    updatedAt: '2024-03-25T15:30:00Z',
  },

  // Patient 4 - Asthma
  {
    id: '12',
    patientId: '4',
    text: 'Asthma exacerbation. Peak flow: 250 L/min. Started prednisone course.',
    createdAt: '2024-03-04T09:30:00Z',
    updatedAt: '',
  },
  {
    id: '13',
    patientId: '4',
    text: 'Reviewed inhaler technique. Patient using it correctly now.',
    createdAt: '2024-03-18T13:10:00Z',
    updatedAt: '2024-03-18T13:10:00Z',
  },
  {
    id: '14',
    patientId: '4',
    text: 'Asthma control test score: 22/25. Good control achieved.',
    createdAt: '2024-03-19T09:00:00Z',
    updatedAt: '',
  },

  // Patient 5 - Cardiology
  {
    id: '15',
    patientId: '5',
    text: 'Chest pain evaluation. EKG normal. Stress test scheduled.',
    createdAt: '2024-03-05T10:15:00Z',
    updatedAt: '2024-03-05T10:15:00Z',
  },
  {
    id: '16',
    patientId: '5',
    text: 'Stress test completed. No significant abnormalities detected.',
    createdAt: '2024-03-12T14:30:00Z',
    updatedAt: '',
  },
  {
    id: '17',
    patientId: '5',
    text: 'Recommended lifestyle modifications including Mediterranean diet.',
    createdAt: '2024-03-13T15:30:00Z',
    updatedAt: '2024-03-13T15:30:00Z',
  },

  // Patient 6 - Neurology
  {
    id: '18',
    patientId: '6',
    text: 'Initial consultation for chronic migraines. 4-5 episodes per month.',
    createdAt: '2024-03-06T11:20:00Z',
    updatedAt: '',
  },
  {
    id: '19',
    patientId: '6',
    text: 'Started preventive medication. Headache diary provided.',
    createdAt: '2024-03-20T10:00:00Z',
    updatedAt: '2024-03-20T10:00:00Z',
  },
  {
    id: '20',
    patientId: '6',
    text: 'Follow-up: Migraine frequency reduced to 2 episodes per month.',
    createdAt: '2024-03-27T09:45:00Z',
    updatedAt: '',
  },

  // Patient 7 - Endocrinology
  {
    id: '21',
    patientId: '7',
    text: 'Thyroid function tests show hypothyroidism. TSH: 8.5 mIU/L.',
    createdAt: '2024-03-07T13:45:00Z',
    updatedAt: '2024-03-07T13:45:00Z',
  },
  {
    id: '22',
    patientId: '7',
    text: 'Started levothyroxine 50mcg daily. Will recheck in 6 weeks.',
    createdAt: '2024-03-21T14:15:00Z',
    updatedAt: '',
  },

  // Patient 8 - Psychiatry
  {
    id: '23',
    patientId: '8',
    text: 'Depression screening: PHQ-9 score 15. Moderate depression.',
    createdAt: '2024-03-08T09:30:00Z',
    updatedAt: '2024-03-08T09:30:00Z',
  },
  {
    id: '24',
    patientId: '8',
    text: 'Started SSRI and weekly therapy sessions.',
    createdAt: '2024-03-22T11:20:00Z',
    updatedAt: '',
  },
  {
    id: '25',
    patientId: '8',
    text: 'Follow-up: PHQ-9 score improved to 8. Continuing treatment.',
    createdAt: '2024-03-29T10:15:00Z',
    updatedAt: '2024-03-29T10:15:00Z',
  },

  // Patient 9 - General Medicine
  {
    id: '26',
    patientId: '9',
    text: 'Annual physical examination completed. All vital signs normal.',
    createdAt: '2024-03-09T10:00:00Z',
    updatedAt: '',
  },
  {
    id: '27',
    patientId: '9',
    text: 'Recommended flu shot and updated tetanus vaccination.',
    createdAt: '2024-03-23T09:45:00Z',
    updatedAt: '2024-03-23T09:45:00Z',
  },

  // Patient 10 - Orthopedics
  {
    id: '28',
    patientId: '10',
    text: 'Pre-operative assessment for knee replacement surgery.',
    createdAt: '2024-03-10T14:30:00Z',
    updatedAt: '',
  },
  {
    id: '29',
    patientId: '10',
    text: 'Surgery completed successfully. No complications.',
    createdAt: '2024-03-17T08:00:00Z',
    updatedAt: '2024-03-17T08:00:00Z',
  },
  {
    id: '30',
    patientId: '10',
    text: 'Physical therapy progressing well. Range of motion: 0-120 degrees.',
    createdAt: '2024-03-24T13:30:00Z',
    updatedAt: '',
  },

  // Patient 11 - Diabetes Education
  {
    id: '31',
    patientId: '11',
    text: 'Diabetes education session completed. Proper glucose monitoring technique demonstrated.',
    createdAt: '2024-03-11T11:15:00Z',
    updatedAt: '2024-03-11T11:15:00Z',
  },
  {
    id: '32',
    patientId: '11',
    text: 'Nutrition consultation: Carbohydrate counting reviewed.',
    createdAt: '2024-03-25T10:15:00Z',
    updatedAt: '',
  },

  // Patient 12 - Ophthalmology
  {
    id: '33',
    patientId: '12',
    text: 'Pre-operative assessment for cataract surgery. Patient cleared for procedure.',
    createdAt: '2024-03-12T15:00:00Z',
    updatedAt: '2024-03-12T15:00:00Z',
  },
  {
    id: '34',
    patientId: '12',
    text: 'Surgery completed. Post-op instructions provided.',
    createdAt: '2024-03-19T08:30:00Z',
    updatedAt: '',
  },
  {
    id: '35',
    patientId: '12',
    text: 'Post-op check: Vision 20/30. Healing progressing well.',
    createdAt: '2024-03-26T15:00:00Z',
    updatedAt: '2024-03-26T15:00:00Z',
  },

  // Patient 13 - Nephrology
  {
    id: '36',
    patientId: '13',
    text: 'Chronic kidney disease follow-up. GFR: 45 mL/min.',
    createdAt: '2024-03-13T11:45:00Z',
    updatedAt: '',
  },
  {
    id: '37',
    patientId: '13',
    text: 'Adjusting blood pressure medication. Monitoring kidney function.',
    createdAt: '2024-03-27T11:45:00Z',
    updatedAt: '2024-03-27T11:45:00Z',
  },

  // Patient 14 - Sleep Medicine
  {
    id: '38',
    patientId: '14',
    text: 'Initial evaluation for sleep apnea. Epworth score: 15/24.',
    createdAt: '2024-03-14T14:30:00Z',
    updatedAt: '',
  },
  {
    id: '39',
    patientId: '14',
    text: 'Sleep study completed. AHI: 25 events/hour.',
    createdAt: '2024-03-21T09:15:00Z',
    updatedAt: '2024-03-21T09:15:00Z',
  },
  {
    id: '40',
    patientId: '14',
    text: 'CPAP titration completed. Pressure set at 8 cm H2O.',
    createdAt: '2024-03-28T14:30:00Z',
    updatedAt: '2024-03-28T14:30:00Z',
  },

  // Patient 15 - Rheumatology
  {
    id: '41',
    patientId: '15',
    text: 'Rheumatoid arthritis flare-up. DAS28 score: 5.2.',
    createdAt: '2024-03-15T09:15:00Z',
    updatedAt: '',
  },
  {
    id: '42',
    patientId: '15',
    text: 'Increasing methotrexate dose to 20mg weekly.',
    createdAt: '2024-03-22T10:30:00Z',
    updatedAt: '2024-03-22T10:30:00Z',
  },
  {
    id: '43',
    patientId: '15',
    text: 'Adding short-term prednisone 20mg daily for flare control.',
    createdAt: '2024-03-29T09:15:00Z',
    updatedAt: '',
  },
]
