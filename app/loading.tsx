export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-6">
        <div className="h-6 w-40 rounded-full bg-accentSoft" />
        <div className="h-16 w-full max-w-3xl rounded-[2rem] bg-white" />
        <div className="h-6 w-full max-w-2xl rounded-full bg-white" />
        <div className="grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="h-72 rounded-[2rem] bg-white" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
