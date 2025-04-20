import React from 'react';
import { 
  Building2, 
  ChevronRight,
  CircuitBoard, 
  LineChart, 
  Settings2, 
  Shield, 
  Zap,
  Wind,
  Thermometer,
  Users,
  Battery,
  Gauge,
  AlertCircle,
  BarChart3,
  PanelRight,
  Clock,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
import { blogPosts } from './blogData';

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

const HomePage: React.FC = () => {
  const [animatedBlogs, setAnimatedBlogs] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchValue, setSearchValue] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);
  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // Trigger blog animations after component is mounted
    setTimeout(() => {
      setAnimatedBlogs(true);
    }, 300);
  }, []);

  // Filter blogs based on category and search
  const filteredBlogs = blogPosts.filter(blog => 
    (activeCategory === "All" || blog.category === activeCategory) &&
    (blog.title.toLowerCase().includes(searchValue.toLowerCase()) || 
     blog.excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
     blog.category.toLowerCase().includes(searchValue.toLowerCase()))
  );

  // Get featured blogs
  const featuredBlogs = blogPosts.filter(blog => blog.featured);

  // Scroll to features section
  const featuresRef = React.useRef<HTMLDivElement>(null);
  
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-purple-900/20 to-purple-900/40">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-48 md:pb-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 text-xl md:text-2xl font-bold mb-4">
                AI Powered most advanced IoT Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Power Smarter Decisions Across <span className="text-purple-400">Assets, Buildings, People & Urban Spaces</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of IoT to optimize energy usage, enhance comfort, and streamline operations across your entire building portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link 
                  to="/usecases" 
                  className="border border-purple-500 text-purple-400 hover:text-purple-300 px-6 py-3 rounded-lg font-medium hover:border-purple-400 transition-colors flex items-center justify-center"
                >
                  Explore Use Cases <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-xl transform scale-105"></div>
                <div className="relative bg-gray-900 border border-purple-500/20 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Building Performance</h3>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={data}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                            </linearGradient>
                            <linearGradient id="occupancyGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                          <XAxis dataKey="name" stroke="#A0AEC0" />
                          <YAxis stroke="#A0AEC0" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(26, 32, 44, 0.8)',
                              borderColor: '#4C1D95',
                              borderRadius: '0.5rem',
                              color: '#E2E8F0'
                            }} 
                          />
                          <Area 
                            type="monotone" 
                            dataKey="Energy" 
                            stroke="#8884d8" 
                            fillOpacity={1} 
                            fill="url(#energyGradient)" 
                          />
                          <Area 
                            type="monotone" 
                            dataKey="Occupancy" 
                            stroke="#4ade80" 
                            fillOpacity={1} 
                            fill="url(#occupancyGradient)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <div className="flex items-center text-xs text-gray-400">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                          <span>Energy Usage</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-400">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span>Occupancy</span>
                        </div>
                      </div>
                      <div className="border border-purple-900/30 rounded-lg px-3 py-1 flex items-center">
                        <span className="text-green-400 font-medium">-12%</span>
                        <span className="text-xs text-gray-400 ml-1">vs. last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 transform transition-transform hover:-translate-y-1">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-500/20 mb-5">
                <Building2 className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Intelligent Monitoring</h3>
              <p className="text-gray-400 mb-5">Gain real-time insights into your building's performance with data from IoT sensors and smart devices.</p>
              <Link to="/features/monitoring" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 transform transition-transform hover:-translate-y-1">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-500/20 mb-5">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Optimization</h3>
              <p className="text-gray-400 mb-5">Reduce energy consumption and costs with AI-powered optimization and automated control systems.</p>
              <Link to="/features/energy" className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-teal-900/20 backdrop-blur-sm p-6 rounded-xl border border-teal-500/20 transform transition-transform hover:-translate-y-1">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-teal-500/20 mb-5">
                <Shield className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
              <p className="text-gray-400 mb-5">Protect your building and occupants with integrated security and access control solutions.</p>
              <Link to="/features/security" className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-950"></div>
      </div>

      {/* Powerful Dashboard Analytics Section */}
      <div className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Powerful Dashboard Analytics</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Monitor and control your building systems in real-time with our intuitive dashboard interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Energy Manager</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Total Energy</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">128.5</span>
                      <span className="text-xl">kWh</span>
                    </div>
                    <div className="text-green-400 text-xs mt-1">-12% from yesterday</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Peak Demand</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">42.3</span>
                      <span className="text-xl">kW</span>
                    </div>
                    <div className="text-red-400 text-xs mt-1">+5% from yesterday</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-400">Energy Consumption</div>
                    <div className="text-sm text-gray-400">Daily</div>
                  </div>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { time: '00:00', value: 30 },
                          { time: '04:00', value: 25 },
                          { time: '08:00', value: 45 },
                          { time: '12:00', value: 60 },
                          { time: '16:00', value: 50 },
                          { time: '20:00', value: 40 }
                        ]}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
                        <XAxis dataKey="time" stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis hide={true} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(26, 32, 44, 0.8)',
                            borderColor: '#4C1D95',
                            borderRadius: '0.5rem',
                            color: '#E2E8F0'
                          }}
                        />
                        <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                      <span className="text-xs text-gray-400">Electricity 68%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                      <span className="text-xs text-gray-400">Natural Gas 22%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                      <span className="text-xs text-gray-400">Solar 10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Sustainability Manager</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Carbon Footprint</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">52.4</span>
                      <span className="text-xl">tons CO<sub>2</sub>e</span>
                    </div>
                    <div className="text-green-400 text-xs mt-1">-8% from last month</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Renewable Energy</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">32%</span>
                    </div>
                    <div className="text-green-400 text-xs mt-1">+5% from last month</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Sustainability Goals Progress</div>
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
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Air Quality Manager</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">IAQ Score</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">87/100</span>
                    </div>
                    <div className="text-green-400 text-xs mt-1">+2 points from yesterday</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">CO<sub>2</sub> Levels</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">650</span>
                      <span className="text-xl">ppm</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">Within normal range</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-400 mb-2">Current Parameters</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Temperature</span>
                        <span>22.5°C</span>
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
                        <span>15 μg/m³</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Asset Manager</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Equipment Efficiency</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">87%</span>
                    </div>
                    <div className="text-red-400 text-xs mt-1">-3% from last month</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Uptime</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">99.2%</span>
                    </div>
                    <div className="text-green-400 text-xs mt-1">+0.5% from last month</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-400 mb-2">Equipment Status</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">AHU-1</span>
                      </div>
                      <span className="text-xs text-gray-400">Operational</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="text-xs">92%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Chiller-1</span>
                      </div>
                      <span className="text-xs text-gray-400">Operational</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="text-xs">88%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm">Boiler-2</span>
                      </div>
                      <span className="text-xs text-gray-400">Maintenance</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-xs">75%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm">VAV-12</span>
                      </div>
                      <span className="text-xs text-red-400">Alert</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div ref={featuresRef} id="features" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our comprehensive IoT platform offers a suite of powerful features designed to transform your building into an intelligent, efficient, and sustainable space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-blue-500" />,
                title: "Centralized Dashboard",
                description: "Monitor and control all your building systems from a single, intuitive dashboard with customizable widgets and reports.",
                link: "/features/dashboard"
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Energy Management",
                description: "Track, analyze, and optimize energy usage across your building to reduce costs and improve sustainability.",
                link: "/features/energy"
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "Occupancy Management",
                description: "Monitor space utilization in real-time and optimize room allocations based on actual usage patterns.",
                link: "/features/occupancy"
              },
              {
                icon: <Thermometer className="h-8 w-8 text-red-500" />,
                title: "Environmental Monitoring",
                description: "Track temperature, humidity, air quality, and other environmental parameters to ensure occupant comfort.",
                link: "/features/environment"
              },
              {
                icon: <Settings2 className="h-8 w-8 text-green-500" />,
                title: "Predictive Maintenance",
                description: "Identify potential equipment issues before they cause problems with AI-powered predictive analytics.",
                link: "/features/maintenance"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-500" />,
                title: "Security & Access Control",
                description: "Manage access permissions, monitor security systems, and track visitor movements throughout your building.",
                link: "/features/security"
              },
              {
                icon: <Battery className="h-8 w-8 text-teal-500" />,
                title: "Resource Management",
                description: "Monitor and optimize water, electricity, gas, and other resource consumption in real-time.",
                link: "/features/resources"
              },
              {
                icon: <CircuitBoard className="h-8 w-8 text-orange-500" />,
                title: "System Integration",
                description: "Seamlessly integrate with existing building management systems, HVAC, lighting, and security systems.",
                link: "/features/integration"
              },
              {
                icon: <Wind className="h-8 w-8 text-teal-500" />,
                title: "Air Quality Monitoring",
                description: "Maintain healthy indoor environments by tracking temperature, humidity, CO₂, PM2.5, and other air quality parameters in real-time.",
                link: "/features/airquality"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
                title: "Sustainability Tracking",
                description: "Meet environmental goals with carbon footprint monitoring, renewable energy tracking, and progress reporting on sustainability initiatives.",
                link: "/features/sustainability"
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-red-400" />,
                title: "Predictive Maintenance",
                description: "Identify potential equipment issues before they cause problems with AI-powered predictive analytics and maintenance scheduling.",
                link: "/features/predictive"
              },
              {
                icon: <CircuitBoard className="h-8 w-8 text-indigo-500" />,
                title: "Compliance Management",
                description: "Ensure regulatory compliance with automated reporting, audit trails, and documentation for energy and building standards.",
                link: "/features/compliance"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-gray-800 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Latest Insights & Trends
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Explore our latest articles, case studies, and industry insights on IoT implementation across various sectors
          </p>

          {/* Featured Posts Carousel */}
          <div className="relative mb-16 overflow-hidden rounded-xl">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {featuredBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="min-w-full snap-center relative"
                >
                  <div className="relative h-96 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform transition-transform duration-10000 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${blog.categoryColor} bg-opacity-90 text-white`}>
                        {blog.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-4">{blog.title}</h3>
                      <p className="text-gray-200 mb-4 max-w-2xl">{blog.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="mr-4">{blog.readTime}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                      <Link to={`/blog/${blog.id}`} className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center inline-block">
                        Read Article <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredBlogs.map((_, index) => (
                <button 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
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
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                  <Link to={`/blog/${blog.id}`} className="mt-4 text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
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

          <div className="mt-12 text-center">
            <Link to="/blog" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-auto inline-block">
              <PanelRight className="mr-2 h-4 w-4" />
              View All Articles
            </Link>
          </div>

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
      </section>
    </>
  );
};

export default HomePage; 