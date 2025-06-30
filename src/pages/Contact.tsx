const Contact = () => {
  const contactInfo = [
    {
      name: "Barker (Chairman)",
      role: "Founder & Chairman",
      phone: "079 661 9031",
      description: "For general inquiries, partnerships, and organizational matters"
    },
    {
      name: "Linda (Secretary)",
      role: "Co-Founder & Secretary",
      phone: "084 259 9193",
      description: "For event coordination, documentation, and administrative support"
    },
    {
      name: "Khulekani (Treasurer)",
      role: "Co-Founder & Treasurer",
      phone: "072 235 1474",
      description: "For financial matters, sponsorships, and funding opportunities"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Get in touch with our team to learn more about our programs and opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect directly with our founders and leadership team for any inquiries, 
              partnerships, or to learn more about joining our organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {contact.name}
                </h3>
                
                <p className="text-gold font-semibold mb-4">
                  {contact.role}
                </p>
                
                <div className="mb-4">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-2xl font-bold text-primary hover:text-gold transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                Follow Us Online
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Facebook</h4>
                    <p className="text-gray-600">African Kasie Ballon D'Or</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Stay connected with us on Facebook for the latest updates, tournament results, 
                  player highlights, and community events. Join our growing community of township football enthusiasts.
                </p>
                
                <a 
                  href="#" 
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Visit Our Facebook Page</span>
                </a>
              </div>
            </div>

            {/* Organization Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                About Our Organization
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    Empowering township football talent through recognition, development, and professional opportunities.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">What We Do</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Organize township football tournaments</li>
                    <li>• Recognize outstanding player achievements</li>
                    <li>• Provide development programs for young talent</li>
                    <li>• Connect players with professional opportunities</li>
                    <li>• Build strong community partnerships</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Get Involved</h4>
                  <p className="text-gray-600">
                    Whether you're a player, coach, sponsor, or football enthusiast, there are many ways 
                    to get involved with Kasie Ballon D'Or. Contact our team to learn about opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a talented player looking for recognition, a sponsor wanting to support 
              township football, or someone passionate about developing local talent, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:079 661 9031" 
                className="btn-secondary text-lg"
              >
                Call Barker: 079 661 9031
              </a>
              <a 
                href="#" 
                className="bg-gold hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
              >
                Follow Us on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact