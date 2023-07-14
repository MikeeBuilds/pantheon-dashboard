export default function Navbar() {
    return (
      <nav className="h-full w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl mb-4">My Token Dashboard</h1>
        <ul>
          <li>Pantheon holdings</li>
          <li>Total Backing</li>
          <li>LP Staking</li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    );
  }
  