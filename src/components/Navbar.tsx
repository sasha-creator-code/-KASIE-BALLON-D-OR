import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-1 shadow-md">
              <img 
                src="/logo.jpeg" 
                alt="Kasie Ballon D'Or" 
                className="h-12 w-12 object-contain rounded-full"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-white text-lg md:text-xl font-heading font-bold tracking-wide">
                KASIE BALLON D'OR
              </h1>
              <p className="text-gold text-xs md:text-sm font-medium">
                Where Football Stars Are Born
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-gold transition-colors duration-300 font-medium ${
                  isActive(item.path) ? 'text-gold border-b-2 border-gold pb-1' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-white hover:text-gold transition-colors duration-300 ${
                  isActive(item.path) ? 'text-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
