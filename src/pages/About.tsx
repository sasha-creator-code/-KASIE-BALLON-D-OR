const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Discover the story behind African Kasie Ballon D'Or and our mission to elevate township football talent
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
               Our vision is to empower and inspire the talented young athletes from our townships—our Kasie Stars—by building their self-confidence and nurturing their dreams. We aim to create a supportive environment where these young players are motivated to aim high, develop their skills, and ultimately rise to become professional soccer players who can compete on both national and international stages.
              </p>
              
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to identify, develop, and showcase the best football talent from African townships, ensuring that our Kasie Ballon d’Or candidates have the opportunity, resources, and exposure needed to compete with the world’s elite players. We strive to support their journey to excellence and celebrate their achievements as they win prestigious professional awards such as FIFA Player of the Year and other top honors in the sport.
              </p>
            </div>
            
            <div className="relative">
          <img
  src="/barka.jpeg"
  alt="African Kasie Ballon D'Or Man Of The Match Medal"
  className="object-cover group-hover:scale-110 transition-transform duration-700"
  style={{
    width: '100%',     // Stretch to full width of the parent
    height: '300px',   // Adjust height as needed (change '300px' to your preference)
    objectFit: 'cover' // Ensures the image covers the area without distortion
  }}
/>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who founded African Kasie Ballon D'Or Organization
            </p>
          </div>

          {/* Founder Story */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Bandile Nkwanyana</strong>, well known as <strong>Barker</strong>, is the Founder of African Kasie Ballon D'Or Organization. 
              Along the way, he met <strong>Khulekani Xaba</strong> and <strong>Linda Mile</strong> as they are African Kasie Ballon D'Or Organization 
              Co-Founders, as they had the same vision with Barker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bandile Nkwanyana (Barker) */}
            <div className="card text-center">
              <div className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="/bandile.jpeg"
                    alt="Bandile Nkwanyana (Barker)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Bandile Nkwanyana
                </h3>
                <p className="text-gold font-semibold mb-4">(Barker)</p>
                <p className="text-lg font-semibold text-gray-800 mb-4">Founder & Chairman</p>
                <p className="text-gray-600">
                  The visionary founder who established the African Kasie Ballon D'Or Organization 
                  with a passion for elevating township football talent to professional levels.
                </p>
              </div>
            </div>

            {/* Khulekani Xaba */}
            <div className="card text-center">
              <div className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                 <img 
                    src="/batrker1.jpeg"
                    alt="Bandile Nkwanyana (Barker)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Khulekani Xaba
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">Co-Founder & Treasurer</p>
                <p className="text-gray-600">
                  A dedicated co-founder who shares the same vision as Barker, committed to 
                  providing opportunities for township football stars to shine.
                </p>
              </div>
            </div>

            {/* Linda Mile */}
            <div className="card text-center">
              <div className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="/lindie.jpeg"
                    alt="Linda Mile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Linda Mile
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">Co-Founder & Secretary</p>
                <p className="text-gray-600">
                  An inspiring co-founder who joined forces with Barker and Khulekani, 
                  bringing the same passion and vision for township football development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gold">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">Striving for the highest standards in all our endeavors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Community</h3>
              <p className="text-gray-300">Building strong connections within our township communities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Passion</h3>
              <p className="text-gray-300">Driven by love for the beautiful game and our players</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Growth</h3>
              <p className="text-gray-300">Continuous development and improvement for all our players</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About