import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-blue-100 px-20 flex justify-between items-center py-4">
      <div>
        <h1 className="text-3xl font-semibold">ISMT Chat</h1>
      </div>

      <div className="flex items-center gap-8">
        <nav className="space-x-4">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/help">Help</a>
        </nav>
        <button className="px-8 py-2 bg-blue-600 rounded text-white font-semibold">Chat</button>
      </div>
    </header>
  )
}

export default Navbar