import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section - Reduced height */}
  <section className="relative bg-primary text-white h-[70vh] flex items-center overflow-hidden">
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
    style={{
      backgroundImage: `url('./banner2.jpg')`,
    }}
  ></div>

  <div className="relative container-max section-padding">
    <div className="max-w-4xl animate-fade-in ml-0 md:ml-[-400px]">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight animate-bounce-in">
        KASIE BALLON D'OR
      </h1>

      <p
        className="text-lg md:text-xl mb-6 font-medium animate-slide-up"
        style={{ color: '#00008B' }} // Dark blue
      >
        Where Football Stars Are Born and Raised — Kasi Games
      </p>

      <p
        className="text-base md:text-lg mb-8 leading-relaxed max-w-3xl animate-slide-up-delay font-bold"
        style={{ color: '#ffffff', fontSize: 20 }}
      >
        We are dedicated to giving our township stars the platform to shine, dream bigger, 
        and become professionals through recognition and passion-driven football.
      </p>

      <Link to="/about" className="btn-primary text-lg animate-pulse-glow">
        Learn More About Us
      </Link>
    </div>
  </div>
</section>


      {/* Featured Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering township football talent to reach professional levels through 
              recognition, development, and unwavering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary-600 hover:text-white transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin-slow">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-white mb-4">Recognition</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Celebrating and acknowledging the exceptional talent found in our townships.
              </p>
            </div>

            <div className="card p-8 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary-600 hover:text-white transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-white mb-4">Development</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Providing platforms and opportunities for continuous growth and improvement.
              </p>
            </div>

            <div className="card p-8 text-center group hover:bg-gradient-to-br hover:from-primary hover:to-primary-600 hover:text-white transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-white mb-4">Excellence</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Striving for the highest standards in everything we do, from grassroots to professional level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Recent News
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest achievements and memorable moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="overflow-hidden">
                <img 
                  src="/duku.jpeg"
                  alt="Elkasico Tournament Success"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
               Duku Duku Wins African Kasie Ballon D'Or Man of the Match
                </h3>
                <p className="text-gray-600 mb-4">
             Outstanding performance at the Elkasico Tournament in Vosloorus showcases the exceptional talent of our township stars.
                </p>
                <Link to="/news" className="text-gold hover:text-gold-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="overflow-hidden">
                <img 
                  src="/barka.jpeg"
                  alt="Barker and Khulekani Xaba at Elkasico Tournament"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                  Barker and Khulekani Xaba at Elkasico Tournament
                </h3>
                <p className="text-gray-600 mb-4">
                  Our founders were present at the prestigious Elkasico Tournament, 
                  supporting our players and celebrating township football excellence.
                </p>
                <Link to="/news" className="text-gold hover:text-gold-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="overflow-hidden">
                <img 
                  src="/african kasie.jpeg"
                  alt="Annual Awards 2022-2023"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                  Annual Awards 2022-2023: Kasie Ballon D'Or Winners
                </h3>
                <p className="text-gray-600 mb-4">
                  Celebrating the best of township football with our annual awards ceremony, 
                  recognizing outstanding talent and dedication.
                </p>
                <Link to="/news" className="text-gold hover:text-gold-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="overflow-hidden">
                <img 
                  src="/medal.jpeg"
                  alt="African Kasie Ballon D'Or Man Of The Match Medal"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                  African Kasie Ballon D'Or Man Of The Match Medal
                </h3>
                <p className="text-gray-600 mb-4">
                  Our prestigious medals recognize outstanding individual performances 
                  and celebrate the excellence of township football talent.
                </p>
                <Link to="/about" className="text-gold hover:text-gold-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                  Learn More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home