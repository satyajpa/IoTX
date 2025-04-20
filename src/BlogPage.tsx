import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  X, 
  Share2, 
  Heart, 
  MessageCircle,
  ArrowLeft,
  PanelRight,
  Mail
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Import the blog data from App.tsx
import { blogPosts, allCategories } from './blogData';

interface BlogPageProps {
  setShowBlogPage: React.Dispatch<React.SetStateAction<boolean>>;
  activeBlogId: number | null;
  setActiveBlogId: React.Dispatch<React.SetStateAction<number | null>>;
}

const BlogPage: React.FC<BlogPageProps> = ({ setShowBlogPage, activeBlogId, setActiveBlogId }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const [animatedBlogs, setAnimatedBlogs] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  
  const navigate = useNavigate();
  const params = useParams();
  const blogId = params.id ? parseInt(params.id) : null;
  
  // Override activeBlogId with URL parameter if available
  const currentBlogId = blogId !== null ? blogId : activeBlogId;

  useEffect(() => {
    // If blog ID is in URL params, update the activeBlogId state
    if (blogId !== null && blogId !== activeBlogId) {
      setActiveBlogId(blogId);
    }
    
    // Trigger blog animations after component is mounted
    setTimeout(() => {
      setAnimatedBlogs(true);
    }, 300);

    // Show newsletter popup after scrolling 75% through content
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const body = document.body;
      const documentHeight = body.scrollHeight;
      
      if (documentHeight > windowHeight) {
        const totalHeight = documentHeight - windowHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        
        setReadingProgress(scrollPercentage);
        
        if (scrollPercentage > 75 && !showNewsletterPopup) {
          setShowNewsletterPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentBlogId, showNewsletterPopup, blogId, activeBlogId, setActiveBlogId]);

  // Filter blogs based on category and search
  const filteredBlogs = blogPosts.filter(blog => 
    (activeCategory === "All" || blog.category === activeCategory) &&
    (blog.title.toLowerCase().includes(searchValue.toLowerCase()) || 
     blog.excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
     blog.category.toLowerCase().includes(searchValue.toLowerCase()))
  );

  // Find the active blog
  const activeBlog = blogPosts.find(blog => blog.id === currentBlogId);

  // Get related blogs (same category excluding active blog)
  const relatedBlogs = activeBlog 
    ? blogPosts.filter(blog => 
        blog.category === activeBlog.category && 
        blog.id !== activeBlog.id
      ).slice(0, 3) 
    : [];

  if (!activeBlog) {
    return (
      <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Latest Insights & Trends
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Explore our latest articles, case studies, and industry insights on IoT implementation across various sectors
          </p>

          {/* Blog Navigation */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-center sticky top-16 bg-gray-900/80 backdrop-blur-sm z-30 py-4 rounded-lg">
            <div className="flex overflow-x-auto pb-3 md:pb-0 w-full md:w-auto mb-4 md:mb-0 scrollbar-hide">
              <div className="flex space-x-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors relative ${
                      activeCategory === category 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                    {activeCategory === category && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <button 
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => {
                  setShowSearch(!showSearch);
                  if (!showSearch) {
                    setTimeout(() => {
                      if (searchRef.current) {
                        searchRef.current.focus();
                      }
                    }, 100);
                  }
                }}
              >
                {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
              <div className={`absolute right-0 top-full mt-2 ${showSearch ? 'opacity-100 w-64' : 'opacity-0 w-0'} transition-all duration-300 overflow-hidden`}>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className={`bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 transform ${
                  animatedBlogs 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                } cursor-pointer`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  navigate(`/blog/${blog.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${blog.categoryColor} bg-opacity-90 text-white`}>
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    Read Article <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No blog posts found with the current filters.</p>
              <button 
                className="mt-4 text-purple-400 hover:text-purple-300"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchValue("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-purple-900/30 to-gray-900 p-8 rounded-xl border border-purple-900/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400">Get the latest IoT insights, trends, and case studies delivered straight to your inbox.</p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog detail view
  return (
    <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-16 left-0 right-0 h-1 bg-gray-800 z-50"
        style={{ zIndex: 100 }}
      >
        <div 
          className="h-full bg-purple-500"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to blog
        </button>

        {/* Blog Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${activeBlog.categoryColor} bg-opacity-90 text-white`}>
              {activeBlog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{activeBlog.title}</h1>
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              <Clock className="h-4 w-4 mr-1 text-gray-400" />
              <span className="text-gray-400">{activeBlog.readTime}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-gray-400" />
              <span className="text-gray-400">{activeBlog.date}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-8">
          <img 
            src={activeBlog.image} 
            alt={activeBlog.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          {activeBlog.fullContent}
        </div>

        {/* Article Footer */}
        <div className="border-t border-gray-800 pt-6 mb-12">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                <Heart className="h-5 w-5 mr-1" />
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
              <button className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>Comment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map(blog => (
              <div 
                key={blog.id} 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  navigate(`/blog/${blog.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-2 line-clamp-2">{blog.title}</h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="mr-2">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-900/30 to-gray-900 p-6 rounded-xl border border-purple-900/20 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest IoT insights and trends delivered to your inbox.</p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Popup */}
      {showNewsletterPopup && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-gray-900 rounded-xl shadow-2xl border border-purple-500/30 p-6 z-50 animate-fade-in-up">
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            onClick={() => setShowNewsletterPopup(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <h4 className="text-lg font-bold mb-2">Enjoying this article?</h4>
          <p className="text-gray-300 text-sm mb-4">Subscribe to get the latest IoT insights directly in your inbox.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-grow bg-gray-800 text-white px-3 py-1 text-sm rounded-l-lg border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded-r-lg transition-colors flex items-center">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage; 