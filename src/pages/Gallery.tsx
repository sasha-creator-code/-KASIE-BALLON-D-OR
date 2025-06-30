import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Capturing the memorable moments of our journey in township football excellence
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section – Manually Organized by Category */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">

          {/* Tournament */}
          <div className="mb-12">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <img
                src="gallery1.jpeg"
                alt="Tournament 1"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
              <img
                src="/gallery2.jpeg"
                alt="Tournament 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
               <img
                src="/gallery9.jpeg"
                alt="Events 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
               <img
                src="/african kasie.jpeg"
                alt="Events 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Awards */}
          <div className="mb-12">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <img
                src="/gallery3.jpeg"
                alt="Awards 1"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
              <img
                src="/gallery4.jpeg"
                alt="Awards 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
               <img
                src="/gallery8.jpeg"
                alt="Events 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
               <img
                src="/duku.jpeg"
                alt="Events 2"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
              
            </div>
          </div>

          {/* Events */}
          <div className="mb-12">
      
          
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Share Your Moments
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have photos from our events or tournaments? We'd love to feature them in our gallery. 
              Connect with us on social media to share your memorable moments.
            </p>
            <div className="flex justify-center">
              <a 
                href="#" 
                className="bg-gold hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Connect on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
