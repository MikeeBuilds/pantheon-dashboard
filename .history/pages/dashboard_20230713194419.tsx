import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="h-full w-64 bg-gray-800 text-white p-6 flex flex-col">
      <h1 className="text-2xl mb-4">My Token Dashboard</h1>
      <ul className="flex-grow">
        <li className="mb-2">
          <Link href="/dashboard" className="block py-1 px-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/profile" className="block py-1 px-2 rounded hover:bg-gray-700">
            Profile
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
      <div className="mt-4">
        {/* Add your footer content here */}
      </div>
    </nav>
  );
}
