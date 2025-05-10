export default function NoResultsFound({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-lg border p-12 text-center text-gray-600">
      {title}
    </div>
  )
}
