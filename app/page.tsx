import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <nav className="space-x-4">
        <Link href="/engineeringPractice" className="text-blue-500 hover:text-blue-700">
          Engineering Practice
        </Link>
        <Link href="/engineeringHandbook" className="text-blue-500 hover:text-blue-700">
          Engineering Handbook
        </Link>
      </nav>
    </main>
  )
}