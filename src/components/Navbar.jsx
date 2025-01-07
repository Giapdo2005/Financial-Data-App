export function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">ValueGlance</div>
      <h1 className="text-base font-bold text-xl">Welcome back Giap</h1>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Log Out
      </button>
    </div>
  );
}
