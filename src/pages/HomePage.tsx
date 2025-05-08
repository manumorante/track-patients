import { Card } from '@/components/common'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex min-h-full items-center bg-gray-50">
      <div>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
              <span className="block font-bold text-zinc-800">Welcome to</span>
              <span className="block font-light text-zinc-600">Frontend Challenge</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              I'm excited to be able to show my skills with a challenge similar to what your coaches
              do to help patients.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Patient List */}
            <Link to="/patients" className="block">
              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Patient List</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    View and manage all your patients in one place.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Card 2 - Latest Notes */}
            <Link to="/patients" className="block">
              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Latest Notes</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Access the most recent patient notes and updates.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Card 3 - Patient Details */}
            <Link to="/patients/1" className="block">
              <Card className="transition-shadow duration-300 hover:shadow-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Patient Details</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    View detailed information about individual patients.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
