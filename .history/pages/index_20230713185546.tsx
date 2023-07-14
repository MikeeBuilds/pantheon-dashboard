import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pantheon Token Dashboard</h1>
      <p>This is a dashboard for managing your tokens.</p>
      <nav>
        <ul>
          <li><Link href="/dashboard">Go to Dashboard</Link></li>
          <li><Link href="/profile">Go to Profile</Link></li>
        </ul>
      </nav>
    </main>
  )
}
