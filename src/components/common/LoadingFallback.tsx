export default function LoadingFallback() {
  return (
    <div className="bg-background/30 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="relative h-8 w-8">
        <div className="border-primary/20 absolute inset-0 animate-spin rounded-full border-2" />
        <div className="border-primary absolute inset-0 animate-spin rounded-full border-2 border-t-transparent" />
      </div>
    </div>
  )
}
