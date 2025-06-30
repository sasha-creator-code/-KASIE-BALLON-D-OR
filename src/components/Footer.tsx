import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="Kasie Ballon D'Or" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-heading font-bold">KASIE BALLON D'OR</h3>
                <p className="text-sm text-gold">Where Football Stars Are Born</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Dedicated to giving our township stars the platform to shine, dream bigger, 
              and become professionals through recognition and passion-driven football.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-gold transition-colors">News</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-gold">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Follow us on social media</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                <strong>Facebook:</strong> Kasie Ballon D'Or
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Kasie Ballon D'Or. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer