import React, { useState, useEffect } from 'react';
import { 
  ChevronDown,
  MenuIcon, 
  X,
  Mail,
  Phone,
  User,
  Building,
  CheckCircle2,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import UseCasesPage from './UseCasesPage';
import AboutPage from './AboutPage';
import SEO from './components/SEO';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [showBlogPage, setShowBlogPage] = useState(false);
  const [activeBlogId, setActiveBlogId] = useState<number | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Extract blog ID from URL and set it in state
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'blog' && pathParts[2]) {
      const id = parseInt(pathParts[2]);
      if (!isNaN(id)) {
        setActiveBlogId(id);
      }
    }
  }, [location]);

  // New content for navigation dropdowns
  const usecases = [
    { name: 'Smart Building Management', description: 'Optimize building operations and energy usage', path: '/usecases/buildings' },
    { name: 'Energy Management', description: 'Reduce energy consumption and costs with smart monitoring', path: '/usecases/energy' },
    { name: 'Air Quality Monitoring', description: 'Monitor indoor air quality for healthier environments', path: '/usecases/air-quality' },
    { name: 'Retail & Grocery', description: 'Smart retail solutions for inventory and facility management', path: '/usecases/retail' },
    { name: 'Asset Management', description: 'Maximize equipment performance and lifespan', path: '/usecases/asset-management' }
  ];

  const integrations = [
    { name: 'Building Management Systems', description: 'Connect with existing BMS infrastructure', path: '/integrations/bms' },
    { name: 'Data Analytics Platforms', description: 'Export data to analytics tools', path: '/integrations/analytics' },
    { name: 'Cloud Services', description: 'Integrate with major cloud providers', path: '/integrations/cloud' },
    { name: 'Security Systems', description: 'Connect with access control and surveillance', path: '/integrations/security' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // In a real implementation, you would make an API call to send the email
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormSubmitted(false);
        setTrialModalOpen(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  // Scroll to features section when clicking on Features in the nav
  const scrollToFeatures = () => {
    if (location.pathname !== '/') {
      navigate('/#features');
    } else {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="IoT X - AI Powered IoT Platform"
        description="Transform buildings and urban spaces with our advanced IoT platform."
      />
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="flex items-center h-8 w-8 relative">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <defs>
                        <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3DFFD8" />
                          <stop offset="100%" stopColor="#39A3FF" />
                        </linearGradient>
                      </defs>
                      <path d="M30 35 L50 55 L70 35 M30 65 L50 45 L70 65" stroke="url(#nav-gradient)" strokeWidth="10" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xl font-bold">IoT X</span>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  type="button"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                <button onClick={scrollToFeatures} className="text-gray-300 hover:text-purple-400 transition-colors">Features</button>
                
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                        Usecases <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                      </Menu.Button>
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-gray-900 shadow-lg border border-purple-900/30 focus:outline-none">
                          <div className="py-2 px-3">
                            {usecases.map((usecase, idx) => (
                              <Menu.Item key={idx}>
                                {({ active }) => (
                                  <Link
                                    to={usecase.path}
                                    className={`block py-2 px-3 rounded-md ${active ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300'}`}
                                  >
                                    <div className="font-medium">{usecase.name}</div>
                                    <div className="text-sm text-gray-400">{usecase.description}</div>
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>

                <Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</Link>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
                
                <button 
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setTrialModalOpen(true)}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu, show/hide based on menu state */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-900/20 bg-gray-900/90">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Home
              </Link>
              <button 
                onClick={() => {
                  scrollToFeatures();
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Features
              </button>
              <div>
                <button 
                  className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => document.getElementById('mobile-usecases')?.classList.toggle('hidden')}
                >
                  <span>Usecases</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div id="mobile-usecases" className="hidden pl-4 space-y-1">
                  {usecases.map((usecase, idx) => (
                    <Link 
                      key={idx}
                      to={usecase.path}
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {usecase.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Pricing
              </Link>
              <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Blog
              </Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                About
              </Link>
              <button 
                onClick={() => {
                  setTrialModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-white text-gray-900 hover:bg-gray-100"
              >
                Contact us
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content with Routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage openContactForm={() => setTrialModalOpen(true)} />} />
            <Route path="/blog" element={<BlogPage setShowBlogPage={setShowBlogPage} activeBlogId={null} setActiveBlogId={setActiveBlogId} />} />
            <Route path="/blog/:id" element={<BlogPage setShowBlogPage={setShowBlogPage} activeBlogId={activeBlogId} setActiveBlogId={setActiveBlogId} />} />
            <Route path="/usecases" element={<UseCasesPage />} />
            <Route path="/usecases/:useCase" element={<UseCasesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center h-8 w-8 relative">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <defs>
                        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3DFFD8" />
                          <stop offset="100%" stopColor="#39A3FF" />
                        </linearGradient>
                      </defs>
                      <path d="M30 35 L50 55 L70 35 M30 65 L50 45 L70 65" stroke="url(#footer-gradient)" strokeWidth="10" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xl font-bold">IoT X</span>
                </div>
                <p className="text-gray-400">
                  Transforming buildings into intelligent spaces with IoT technology.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
                  <li><Link to="/careers" className="hover:text-purple-400">Careers</Link></li>
                  <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/documentation" className="hover:text-purple-400">Documentation</Link></li>
                  <li><Link to="/blog" className="hover:text-purple-400">Blog</Link></li>
                  <li><Link to="/support" className="hover:text-purple-400">Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-purple-900/20 mt-12 pt-8 text-center text-gray-400">
              <p>© 2023 IoT X. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Free Trial Modal */}
        {trialModalOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 relative overflow-hidden">
              <button 
                onClick={() => setTrialModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Start Your Free 30-Day Trial</h3>
                    <p className="text-gray-400">Enter your details below and we'll get you set up right away.</p>
                  </div>
                  
                  <form onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-800 text-gray-300 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-800 text-gray-300 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input 
                            type="text" 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-gray-800 text-gray-300 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="Acme Inc."
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number (Optional)</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-gray-800 text-gray-300 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Additional Information (Optional)</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3} 
                          className="bg-gray-800 text-gray-300 w-full px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                          placeholder="Tell us about your specific needs or questions..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition-colors"
                    >
                      Request Your Free Trial
                    </button>
                    
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      By signing up, you agree to our Terms of Service and Privacy Policy. We'll contact you at contact@iot-x.io within 24 hours.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="bg-green-400/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-400" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-400 mb-4">Your trial request has been submitted successfully.</p>
                  <p className="text-gray-400">We'll be in touch with you shortly to get you started.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;