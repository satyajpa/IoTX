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
  Package
} from 'lucide-react';
import { Menu } from '@headlessui/react';
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-purple-500 p-2 rounded">
                <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="ml-2 text-xl font-bold">IoT X</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                  Usecases <ChevronDown className="ml-1 h-4 w-4" />
                </Menu.Button>
              </Menu>

              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                  Integrations <ChevronDown className="ml-1 h-4 w-4" />
                </Menu.Button>
              </Menu>

              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</a>
              
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Contact us
              </button>
            </div>
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
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors relative group">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <Bell className="h-6 w-6 text-gray-400" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-purple-500 rounded-full"></span>
                </button>
                <div className="h-8 w-8 bg-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { title: 'Total Energy Savings', value: '$5k', change: '+10%', icon: <Zap className="h-6 w-6 text-orange-400" /> },
                { title: 'Connected Devices', value: '500', change: '+8%', icon: <CircuitBoard className="h-6 w-6 text-teal-400" /> },
                { title: 'Optimized Systems', value: '9', change: '+2%', icon: <Settings2 className="h-6 w-6 text-purple-400" /> },
                { title: 'Buildings Monitored', value: '12', change: '+3%', icon: <Building2 className="h-6 w-6 text-blue-400" /> }
              ].map((metric, i) => (
                <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {metric.icon}
                    <span className="text-green-400 text-sm">
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Level Chart */}
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Level</h3>
                  <div className="flex space-x-2">
                    <button
                      className={`px-3 py-1 rounded-full text-sm ${isVolume ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                      onClick={() => setIsVolume(true)}
                    >
                      Volume
                    </button>
                    <button
                      className={`px-3 py-1 rounded-full text-sm ${!isVolume ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                      onClick={() => setIsVolume(false)}
                    >
                      Service
                    </button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={levelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                      }}
                    />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Customer Fulfillment Chart */}
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Customer Fulfillment</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="Energy"
                      stroke="#8B5CF6"
                      fillOpacity={1}
                      fill="url(#colorEnergy)"
                    />
                    <Area
                      type="monotone"
                      dataKey="Occupancy"
                      stroke="#60A5FA"
                      fillOpacity={1}
                      fill="url(#colorOccupancy)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Top Products</h3>
              <div className="space-y-3">
                {[
                  { name: 'Smart Temperature Sensor', popularity: 92, trend: '+5.2%' },
                  { name: 'Occupancy Monitor', popularity: 86, trend: '+3.8%' },
                  { name: 'Energy Management System', popularity: 78, trend: '+7.1%' }
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-300">{product.name}</span>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500"
                          style={{ width: `${product.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-green-400 text-sm">{product.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features To Boost Your Building Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-purple-500" />,
                title: "Smart Building Management",
                description: "Centralized control and monitoring of all building systems through an intuitive dashboard."
              },
              {
                icon: <LineChart className="h-8 w-8 text-purple-500" />,
                title: "Real-time Analytics",
                description: "Advanced analytics and insights to optimize energy usage and reduce operational costs."
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-500" />,
                title: "Security & Access Control",
                description: "Integrated security systems with real-time monitoring and automated responses."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-purple-900/20">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Dashboard Analytics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Monitor and control your building systems in real-time with our intuitive dashboard interface.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7681089/pexels-photo-7681089.jpeg"
              alt="Dashboard Interface"
              className="rounded-lg shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Seamless Integrations With Your Favorite Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg flex items-center justify-center">
                <Settings2 className="h-12 w-12 text-purple-500" />
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
                <CircuitBoard className="h-8 w-8 text-purple-500" />
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
            <p>© 2025 IoT X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;