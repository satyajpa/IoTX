import React, { useState } from 'react';
import { 
  Building2, 
  ChevronRight,
  ChevronDown,
  CircuitBoard, 
  LineChart, 
  Settings2, 
  Shield, 
  Zap,
  Github,
  Twitter,
  Linkedin,
  Wind,
  Thermometer,
  Users,
  Battery,
  Gauge,
  AlertCircle,
  Search,
  Bell,
  ShoppingCart,
  Home,
  BarChart3,
  Package,
  Menu as MenuIcon,
  X,
  Mail,
  Phone,
  User,
  Building,
  CheckCircle2
} from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'Jan', Energy: 4000, Occupancy: 2400 },
  { name: 'Feb', Energy: 3000, Occupancy: 1398 },
  { name: 'Mar', Energy: 2000, Occupancy: 9800 },
  { name: 'Apr', Energy: 2780, Occupancy: 3908 },
  { name: 'May', Energy: 1890, Occupancy: 4800 },
  { name: 'Jun', Energy: 2390, Occupancy: 3800 },
];

const levelData = [
  { name: 'HVAC', value: 85 },
  { name: 'Lighting', value: 75 },
  { name: 'Security', value: 90 },
  { name: 'Access', value: 80 },
];

function App() {
  const [isVolume, setIsVolume] = useState(true);
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

  // New content for navigation dropdowns
  const usecases = [
    { name: 'Smart Buildings', description: 'Optimize building operations and energy usage' },
    { name: 'Smart Cities', description: 'Connect urban infrastructure for efficiency and safety' },
    { name: 'Industrial IoT', description: 'Monitor and control industrial equipment and processes' },
    { name: 'Healthcare', description: 'Remote monitoring and smart healthcare facilities' }
  ];

  const integrations = [
    { name: 'Building Management Systems', description: 'Connect with existing BMS infrastructure' },
    { name: 'Data Analytics Platforms', description: 'Export data to analytics tools' },
    { name: 'Cloud Services', description: 'Integrate with major cloud providers' },
    { name: 'Security Systems', description: 'Connect with access control and surveillance' }
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
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
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              
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
                                <a
                                  href="#"
                                  className={`block py-2 px-3 rounded-md ${active ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300'}`}
                                >
                                  <div className="font-medium">{usecase.name}</div>
                                  <div className="text-sm text-gray-400">{usecase.description}</div>
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu as="div" className="relative">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                      Integrations <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
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
                          {integrations.map((integration, idx) => (
                            <Menu.Item key={idx}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={`block py-2 px-3 rounded-md ${active ? 'bg-purple-900/20 text-purple-400' : 'text-gray-300'}`}
                                >
                                  <div className="font-medium">{integration.name}</div>
                                  <div className="text-sm text-gray-400">{integration.description}</div>
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</a>
              
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-900/20 bg-gray-900/90">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Features
            </a>
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
                  <a 
                    key={idx}
                    href="#" 
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {usecase.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <button 
                className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => document.getElementById('mobile-integrations')?.classList.toggle('hidden')}
              >
                <span>Integrations</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <div id="mobile-integrations" className="hidden pl-4 space-y-1">
                {integrations.map((integration, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {integration.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Pricing
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Blog
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-gray-900 hover:bg-gray-100">
              Contact us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-purple-900/20 to-purple-900/40">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Transform How You Efficiently Manage Your Smart Buildings
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
              Take Control Of Your Data With Seamless Organization And Real-Time Access. Secure, Scalable, And Designed To Empower Your Business Growth.
            </p>
            <button 
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors relative group"
              onClick={() => setTrialModalOpen(true)}
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>
          </div>

          {/* Dashboard Preview */}
          <section className="py-20 bg-gradient-to-b from-gray-950 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Powerful Dashboard Analytics</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Monitor and control your building systems in real-time with our intuitive dashboard interface.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Energy Dashboard */}
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-2xl">
                  <h3 className="font-semibold mb-4 text-xl">Energy Manager</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Total Energy</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">128.5 kWh</p>
                        <span className="text-green-400 text-sm">-12% from yesterday</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Peak Demand</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">42.3 kW</p>
                        <span className="text-red-400 text-sm">+5% from yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">Energy Consumption</p>
                      <p className="text-xs text-gray-400">Daily</p>
                    </div>
                    <div className="h-32 w-full">
                      <div className="bg-blue-500/20 rounded-md p-1 h-full flex items-end">
                        {[40, 28, 65, 85, 72, 54].map((height, i) => (
                          <div 
                            key={i} 
                            className="bg-blue-500 rounded w-full mx-1" 
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>00:00</span>
                      <span>04:00</span>
                      <span>08:00</span>
                      <span>12:00</span>
                      <span>16:00</span>
                      <span>20:00</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                      <span className="text-gray-400">Electricity 68%</span>
                    </div>
                    <div>
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                      <span className="text-gray-400">Natural Gas 22%</span>
                    </div>
                    <div>
                      <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
                      <span className="text-gray-400">Solar 10%</span>
                    </div>
                  </div>
                </div>

                {/* Sustainability Dashboard */}
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-2xl">
                  <h3 className="font-semibold mb-4 text-xl">Sustainability Manager</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Carbon Footprint</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">52.4 tons CO₂e</p>
                        <span className="text-green-400 text-sm">-8% from last month</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Renewable Energy</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">32%</p>
                        <span className="text-green-400 text-sm">+5% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium mb-3">Sustainability Goals Progress</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Carbon Reduction</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Waste Diversion</span>
                          <span>72%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Water Conservation</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Air Quality Dashboard */}
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-2xl">
                  <h3 className="font-semibold mb-4 text-xl">Air Quality Manager</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">IAQ Score</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">87/100</p>
                        <span className="text-green-400 text-sm">+2 points from yesterday</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">CO₂ Levels</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">650 ppm</p>
                        <span className="text-gray-400 text-sm">Within normal range</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium mb-2">Current Parameters</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Temperature</span>
                          <span>22.5 °C</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Humidity</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-teal-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>PM2.5</span>
                          <span className="text-yellow-400">15 μg/m³</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Management Dashboard */}
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-2xl">
                  <h3 className="font-semibold mb-4 text-xl">Asset Manager</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Equipment Efficiency</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">87%</p>
                        <span className="text-red-400 text-sm">-3% from last month</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">Uptime</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-2xl font-bold">99.2%</p>
                        <span className="text-green-400 text-sm">+0.5% from last month</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-3">Equipment Status</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span>AHU-1</span>
                        </div>
                        <span className="text-xs text-gray-400">Operational</span>
                        <div className="w-24 bg-gray-700 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-xs">92%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          <span>Chiller-1</span>
                        </div>
                        <span className="text-xs text-gray-400">Operational</span>
                        <div className="w-24 bg-gray-700 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-xs">88%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          <span>Boiler-2</span>
                        </div>
                        <span className="text-xs text-gray-400">Maintenance</span>
                        <div className="w-24 bg-gray-700 rounded-full h-1.5">
                          <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-xs">75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          <span>VAV-12</span>
                        </div>
                        <span className="text-xs text-red-400">Alert</span>
                        <div className="w-24 bg-gray-700 rounded-full h-1.5">
                          <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-xs">65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Key Features
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Comprehensive tools to monitor, analyze, and optimize your building's performance
          </p>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-blue-500" />,
                title: "Centralized Dashboard",
                description: "Get a 360° view of your building systems through a unified, intuitive dashboard interface with real-time monitoring and alerts."
              },
              {
                icon: <LineChart className="h-8 w-8 text-green-500" />,
                title: "Energy Management",
                description: "Track and optimize energy consumption with detailed analytics, peak demand management, and cost analysis to reduce operational expenses."
              },
              {
                icon: <Shield className="h-8 w-8 text-red-500" />,
                title: "Security & Access Control",
                description: "Integrate building security systems with real-time monitoring, automated responses, and comprehensive access management."
              },
              {
                icon: <Gauge className="h-8 w-8 text-yellow-500" />,
                title: "Asset Management",
                description: "Monitor equipment performance, track maintenance needs, and optimize asset lifecycles to prevent downtime and extend equipment life."
              },
              {
                icon: <Wind className="h-8 w-8 text-teal-500" />,
                title: "Air Quality Monitoring",
                description: "Maintain healthy indoor environments by tracking temperature, humidity, CO₂, PM2.5, and other air quality parameters in real-time."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
                title: "Sustainability Tracking",
                description: "Meet environmental goals with carbon footprint monitoring, renewable energy tracking, and progress reporting on sustainability initiatives."
              },
              {
                icon: <Users className="h-8 w-8 text-orange-500" />,
                title: "Occupancy Management",
                description: "Optimize space utilization and enhance occupant comfort with real-time occupancy data and automated environment adjustments."
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-red-400" />,
                title: "Predictive Maintenance",
                description: "Identify potential equipment issues before they cause problems with AI-powered predictive analytics and maintenance scheduling."
              },
              {
                icon: <CircuitBoard className="h-8 w-8 text-indigo-500" />,
                title: "Compliance Management",
                description: "Ensure regulatory compliance with automated reporting, audit trails, and documentation for energy and building standards."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-colors group">
                <div className="bg-gray-800/60 p-3 rounded-lg inline-block mb-4 group-hover:bg-purple-900/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Devices Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Smart IoT Devices
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Discover our range of IoT devices designed to transform your building into a smart, efficient space
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="h-8 w-8 text-teal-400" />,
                title: "Temperature Sensors",
                description: "Monitor temperature in real-time across your building for optimal climate control and energy savings."
              },
              {
                icon: <Wind className="h-8 w-8 text-blue-400" />,
                title: "Air Quality Monitors",
                description: "Keep track of indoor air quality to ensure a healthy environment for occupants."
              },
              {
                icon: <Users className="h-8 w-8 text-orange-400" />,
                title: "Occupancy Sensors",
                description: "Detect presence and movement to optimize lighting, HVAC, and space utilization."
              },
              {
                icon: <Gauge className="h-8 w-8 text-purple-400" />,
                title: "Energy Meters",
                description: "Track energy consumption in real-time to identify inefficiencies and reduce costs."
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-red-400" />,
                title: "Security Sensors",
                description: "Protect your building with advanced motion and access control sensors."
              },
              {
                icon: <Battery className="h-8 w-8 text-green-400" />,
                title: "Smart Power Outlets",
                description: "Control and monitor power usage of individual devices remotely."
              }
            ].map((device, index) => (
              <div key={index} className="bg-gray-900/70 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-colors group">
                <div className="bg-gray-800/60 p-3 rounded-lg inline-block mb-4 group-hover:bg-purple-900/30 transition-colors">
                  {device.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{device.title}</h3>
                <p className="text-gray-400">{device.description}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Seamless Integrations
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            IoT X connects with your existing systems and third-party platforms for a complete building management solution
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-12 w-12 text-blue-500" />,
                name: 'Building Management Systems (BMS)',
                description: 'ISO 50001, ASHRAE 90.1, LEED v4.1'
              },
              {
                icon: <LineChart className="h-12 w-12 text-green-500" />,
                name: 'Energy Analytics',
                description: 'Energy monitoring and optimization tools'
              },
              {
                icon: <Wind className="h-12 w-12 text-teal-500" />,
                name: 'HVAC Systems',
                description: 'All major HVAC manufacturers supported'
              },
              {
                icon: <Settings2 className="h-12 w-12 text-purple-500" />,
                name: 'Data Analytics Platforms',
                description: 'Export data to major analytics tools'
              },
              {
                icon: <CircuitBoard className="h-12 w-12 text-orange-500" />,
                name: 'IoT Devices',
                description: 'Compatible with over 500 device types'
              },
              {
                icon: <Shield className="h-12 w-12 text-red-500" />,
                name: 'Security Systems',
                description: 'Access control and surveillance integration'
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-500" />,
                name: 'Smart Lighting',
                description: 'Connect with building lighting systems'
              },
              {
                icon: <Package className="h-12 w-12 text-indigo-500" />,
                name: 'API & Custom Solutions',
                description: 'Extend functionality with our open API'
              }
            ].map((integration, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-colors group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-4 group-hover:bg-gray-800 transition-colors">
                    {integration.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center text-lg">
              View all integrations <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Real-World Applications
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            See how IoT X is transforming buildings and spaces across different industries
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Office Buildings",
                image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
                description: "Optimize workspace conditions, reduce energy costs, and enhance security with smart building management."
              },
              {
                title: "Healthcare Facilities",
                image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
                description: "Monitor patient environments, track assets, and ensure optimal conditions for medical equipment."
              },
              {
                title: "Retail Spaces",
                image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
                description: "Enhance customer experience, optimize store layouts, and improve inventory management."
              },
              {
                title: "Educational Institutions",
                image: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg",
                description: "Create comfortable learning environments while reducing operational costs and improving security."
              },
              {
                title: "Manufacturing Facilities",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
                description: "Monitor equipment performance, ensure optimal conditions, and prevent downtime with predictive maintenance."
              },
              {
                title: "Residential Complexes",
                image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
                description: "Provide residents with comfortable, secure living spaces while optimizing resource usage."
              }
            ].map((useCase, index) => (
              <div key={index} className="overflow-hidden rounded-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <div className="bg-gray-900 p-4">
                  <p className="text-gray-400">{useCase.description}</p>
                  <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-3">
                    View case study <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "IoT X has transformed how we manage our commercial properties. The energy savings alone justified the investment.",
                author: "Sarah Chen",
                role: "Facility Manager, TechCorp"
              },
              {
                quote: "The real-time insights and automated controls have significantly improved our building's efficiency and tenant satisfaction.",
                author: "Michael Rodriguez",
                role: "Operations Director, SmartSpace"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready To Transform Your Building Management?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of smart building management with IoT X's comprehensive solution.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

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
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Support</a></li>
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
  );
}

export default App;