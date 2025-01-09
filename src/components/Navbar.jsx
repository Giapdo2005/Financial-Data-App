export function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold mb-2 sm:mb-0">ValueGlance</div>
      <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded">
        Log Out
      </button>
    </div>
  );
}
