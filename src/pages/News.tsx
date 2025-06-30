import { useState } from 'react'

const News = () => {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const newsArticles = [
    {
      id: 1,
      title: "Duku Duku Wins African Kasie Ballon D'Or Man of the Match",
      summary: "Outstanding performance at the Elkasico Tournament in Vosloorus showcases the exceptional talent of our township stars.",
      fullStory: "In a thrilling display of skill and determination, Duku Duku emerged as the standout performer at the prestigious Elkasico Tournament held in Vosloorus. His exceptional ball control, strategic playmaking, and leadership on the field earned him the coveted African Kasie Ballon D'Or Man of the Match award. The tournament, which featured some of the best township talent from across the region, provided the perfect platform for Duku Duku to showcase why he represents the future of South African football. His performance included two crucial assists and a spectacular goal that left spectators in awe. This recognition further solidifies our mission to elevate township football talent to professional levels.",
      image: "/duku1.jpeg",
   
      category: "Awards"
    },
    {
      id: 2,
      title: "Barker and Khulekani Xaba at Elkasico Tournament",
      summary: "Our founders were present at the prestigious Elkasico Tournament, supporting our players and celebrating township football excellence.",
      fullStory: "Founders Bandile Nkwanyana (Barker) and Khulekani Xaba made their presence felt at the Elkasico Tournament, demonstrating their unwavering commitment to supporting township football talent. Their attendance at this prestigious event underscores the organization's dedication to being present at every level of the game. During the tournament, they engaged with players, coaches, and other stakeholders, discussing opportunities for talent development and professional pathways. The founders also took time to scout emerging talent and identify potential candidates for future Kasie Ballon D'Or recognition. Their hands-on approach and genuine passion for the game continue to inspire players and reinforce the organization's core values of excellence and community support.",
      image: "/barka.jpeg",
  
      category: "Events"
    },
    {
      id: 3,
      title: "Annual Awards 2022-2023: Kasie Ballon D'Or Winners",
      summary: "Celebrating the best of township football with our annual awards ceremony, recognizing outstanding talent and dedication across all categories.",
      fullStory: "The Annual Kasie Ballon D'Or Awards 2022-2023 was a spectacular celebration of township football excellence. The ceremony, attended by players, families, and community leaders, recognized outstanding achievements across multiple categories including Best Player, Best Young Talent, Best Coach, and Community Impact Award. Winners were selected based on their performance, leadership qualities, and contribution to their communities. The event featured inspiring speeches from our founders, highlighting success stories of players who have progressed to higher levels of competition. The ceremony also served as a networking opportunity, connecting talented players with scouts and coaches from professional clubs. This annual tradition continues to motivate players to strive for excellence while maintaining their connection to their township roots.",
      image: "/african kasie.jpeg",
  
      category: "Awards"
    },
    {
      id: 4,
      title: "African Kasie Ballon D'Or Man Of The Match Medal Recognition",
      summary: "Our prestigious medals continue to recognize outstanding individual performances and celebrate the excellence of township football talent.",
      fullStory: "The African Kasie Ballon D'Or Man of the Match Medal has become a symbol of excellence in township football. These beautifully crafted medals, featuring our distinctive logo and colors, are awarded to players who demonstrate exceptional skill, leadership, and sportsmanship during tournaments and matches. Each medal represents not just individual achievement, but also the collective pride of our communities. The recipients of these medals join an elite group of township football stars who have shown that talent knows no boundaries. Our medal program has inspired countless young players to pursue their dreams and has helped bridge the gap between grassroots football and professional opportunities. The recognition that comes with receiving one of these medals often opens doors to further development and career advancement in football.",
      image: "/medal.jpeg",

      category: "Awards"
    }
  ]

  const toggleExpanded = (articleId: number) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Latest News
            </h1>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              Stay updated with the latest happenings in township football and our organization
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="card overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold text-primary mb-4 leading-tight group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                  
                  {expandedArticle === article.id && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg animate-fade-in">
                      <p className="text-gray-700 leading-relaxed">
                        {article.fullStory}
                      </p>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => toggleExpanded(article.id)}
                    className="text-gold hover:text-gold-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                  >
                    {expandedArticle === article.id ? 'Show Less' : 'Read Full Story'}
                    <svg 
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        expandedArticle === article.id ? 'rotate-180' : 'group-hover:translate-x-1'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {expandedArticle === article.id ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      )}
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Follow us on social media to get the latest updates about our tournaments, 
              awards, and player achievements.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="bg-gold hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News