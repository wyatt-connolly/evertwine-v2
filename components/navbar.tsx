import Link from 'next/link'
import { Home } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <Link href="/" className="flex items-center text-gray-800 hover:text-gray-600">
          <Home className="h-6 w-6 mr-2" />
          <span className="font-semibold text-lg">Home</span>
        </Link>
      </div>
    </nav>
  )
}

