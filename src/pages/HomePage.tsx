import PageHeader from '@/components/common/PageHeader'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Home" />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-indigo-600">Patient Management</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Streamline your healthcare workflow with our comprehensive patient management solution.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Patient List */}
          <Link to="/patients" className="block">
            <div className="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Patient List</h3>
                <p className="mt-2 text-sm text-gray-500">
                  View and manage all your patients in one place.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 - Latest Notes */}
          <Link to="/latest-notes" className="block">
            <div className="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Latest Notes</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Access the most recent patient notes and updates.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 - Patient Details */}
          <Link to="/patients/1" className="block">
            <div className="overflow-hidden rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Patient Details</h3>
                <p className="mt-2 text-sm text-gray-500">
                  View detailed information about individual patients.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
