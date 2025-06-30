import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
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
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Capturing the memorable moments of our journey in township football excellence
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max space-y-12">
          {/* Images Array */}
          {[
            {
              title: 'Tournament',
              images: [
                '/gallery1.jpeg',
                '/gallery2.jpeg',
                '/gallery9.jpeg',
                '/african kasie.jpeg'
              ]
            },
            {
              title: 'Awards',
              images: [
                '/gallery3.jpeg',
                '/gallery4.jpeg',
                '/gallery8.jpeg',
                '/duku.jpeg'
              ]
            }
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${section.title} ${idx + 1}`}
                    style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => openModal(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400 transition"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-heading font-bold mb-4">Share Your Moments</h2>
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
