
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col w-full">
        <header className="p-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-bold mb-2">Token Information</h2>
              {/* Add your token information here */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-bold mb-2">Transaction History</h2>
              {/* Add your transaction history here */}
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-bold mb-2">Other Information</h2>
              {/* Add other information here */}
            </div>
          </div>
        </main>
        <footer className="p-4 bg-white border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2023 My Token Dashboard</p>
        </footer>
      </div>
    </div>
  );
}
