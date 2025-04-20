import React from 'react';
import { 
  Lightbulb, 
  Cpu, 
  Brain, 
  Workflow, 
  LineChart, 
  Building, 
  Factory, 
  Landmark, 
  Share2 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-950 via-purple-900/10 to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About IoT X Platform</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming the way organizations manage and interact with physical spaces through the convergence of IoT and artificial intelligence.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-20">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-purple-900/20 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              IoT X is dedicated to creating intelligent environments that enhance efficiency, sustainability, and human experience across buildings, communities, industries, and urban spaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-purple-900/20 p-5 mb-4">
                  <Lightbulb className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-400">
                  Constantly pushing the boundaries of what's possible through technological advancement and creative problem-solving.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-900/20 p-5 mb-4">
                  <Share2 className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Connectivity</h3>
                <p className="text-gray-400">
                  Creating seamless connections between physical infrastructure, digital systems, and human stakeholders.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-900/20 p-5 mb-4">
                  <LineChart className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intelligence</h3>
                <p className="text-gray-400">
                  Leveraging data and AI to transform raw information into actionable insights and automated optimization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Technology */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">The Convergence of AI & IoT</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-purple-900/20 p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-900/20 p-3 mr-4">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">IoT Foundation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our platform connects thousands of sensors and devices to create a comprehensive digital nervous system for physical spaces. These sensors continuously gather data on:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Environmental conditions (temperature, humidity, air quality)
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Occupancy and space utilization patterns
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Equipment performance and operational status
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Resource consumption (energy, water, materials)
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Security and access control events
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-purple-900/20 p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-purple-900/20 p-3 mr-4">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">AI Intelligence</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our advanced AI algorithms transform raw sensor data into intelligent actions and insights by:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Identifying patterns and anomalies in operational data
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Predicting maintenance needs before failures occur
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Optimizing resource usage based on real-time conditions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Learning from historical data to continuously improve performance
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Automating routine tasks and decisions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">The Power of Convergence</h3>
            <p className="text-gray-300">
              When IoT and AI work together, the whole becomes greater than the sum of its parts. Our platform doesn't just collect data or run algorithms—it creates a continuously improving system that gets smarter over time, adapts to changing conditions, and delivers increasing value through:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="rounded-full bg-gray-800 p-2 mr-3 mt-1">
                  <Workflow className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Adaptive Systems</h4>
                  <p className="text-gray-400">Self-adjusting environments that respond to changing conditions and needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-gray-800 p-2 mr-3 mt-1">
                  <LineChart className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Predictive Intelligence</h4>
                  <p className="text-gray-400">Anticipating needs and issues before they become apparent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transforming Spaces */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Transforming Operations Across Environments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all duration-300">
              <Building className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Buildings</h3>
              <p className="text-gray-400">
                Creating comfortable, efficient, and sustainable indoor environments that enhance occupant experience while reducing operational costs.
              </p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all duration-300">
              <Factory className="h-10 w-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Industries</h3>
              <p className="text-gray-400">
                Optimizing production environments, enhancing worker safety, and ensuring equipment reliability through continuous monitoring and predictive analytics.
              </p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all duration-300">
              <Landmark className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Communities</h3>
              <p className="text-gray-400">
                Enhancing residential and mixed-use developments with smart infrastructure that improves quality of life and resource efficiency.
              </p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="h-10 w-10 flex items-center justify-center text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M12 3L2 12h3v8h14v-8h3L12 3z M9 21v-6h6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cities</h3>
              <p className="text-gray-400">
                Supporting urban infrastructure with connected systems that improve efficiency, safety, and sustainability at scale across public and private spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 