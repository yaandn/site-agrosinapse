export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="h-10 w-40 rounded-md bg-muted animate-pulse" />
      </div>
      <section className="container py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="h-12 w-3/4 rounded-md bg-muted animate-pulse" />
            <div className="h-20 w-full rounded-md bg-muted animate-pulse" />
          </div>
          <div className="aspect-video rounded-xl bg-muted animate-pulse" />
        </div>
      </section>
      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="h-8 w-1/2 rounded-md bg-muted animate-pulse" />
            <div className="h-32 w-full rounded-md bg-muted animate-pulse" />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="rounded-full bg-muted h-4 w-4 mt-1 animate-pulse" />
                  <div className="h-6 w-full rounded-md bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-video rounded-xl bg-muted animate-pulse" />
            <div className="h-8 w-1/2 rounded-md bg-muted animate-pulse" />
            <div className="h-20 w-full rounded-md bg-muted animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}
