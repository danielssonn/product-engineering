import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Product Engineering</h1>

      {/* <Image alt="Engineer" width="400" height="400" src="/PEng1.webp"></Image> */}

      <nav className="space-x-8">
        <Link href="/engineeringPractice" className="text-blue-500 hover:text-blue-700">
          The Practice
        </Link>

        <Link href="/engineeringHandbook" className="text-blue-500 hover:text-blue-700">
          Handbook
        </Link>
      </nav>
    </main>
  )
}