export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}