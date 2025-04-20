import React, { useState } from 'react';
import { 
  Building2, 
  ChevronRight,
  CircuitBoard, 
  LineChart, 
  Shield, 
  Zap,
  Wind,
  Thermometer,
  Users,
  Battery,
  Gauge,
  AlertCircle,
  Home,
  ShoppingCart
} from 'lucide-react';

interface UseCaseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics: {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
  }[];
  chart: React.ReactNode;
  sensors: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

const UseCasesPage: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<string>("buildings");

  const useCases: Record<string, UseCaseProps> = {
    buildings: {
      title: "Smart Building Management",
      description: "Optimize your building's performance through centralized monitoring and control of all critical systems. Our smart building solutions provide real-time insights into energy usage, occupancy patterns, environmental conditions, and equipment health.",
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-500",
      metrics: [
        { title: "Energy Savings", value: "32%", change: "+8% from last year", isPositive: true },
        { title: "Operational Costs", value: "-$145K", change: "-12% from last year", isPositive: true },
        { title: "CO₂ Reduction", value: "52.4 tons", change: "-15% from last year", isPositive: true },
        { title: "Space Utilization", value: "87%", change: "+14% from last year", isPositive: true }
      ],
      chart: (
        <div className="bg-gray-800/50 p-4 rounded-lg h-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Energy Consumption Trends</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-full text-sm bg-purple-500 text-white">Daily</button>
              <button className="px-3 py-1 rounded-full text-sm text-gray-400">Weekly</button>
              <button className="px-3 py-1 rounded-full text-sm text-gray-400">Monthly</button>
            </div>
          </div>
          <div className="h-48 w-full">
            <div className="bg-blue-500/20 rounded-md p-1 h-full flex items-end">
              {[40, 65, 55, 70, 90, 55, 60, 85, 75, 45, 55, 70].map((height, i) => (
                <div 
                  key={i} 
                  className="bg-blue-500 rounded w-full mx-1" 
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>12AM</span>
            <span>3AM</span>
            <span>6AM</span>
            <span>9AM</span>
            <span>12PM</span>
            <span>3PM</span>
            <span>6PM</span>
            <span>9PM</span>
            <span>12AM</span>
          </div>
        </div>
      ),
      sensors: [
        "Temperature & Humidity Sensors",
        "Occupancy & Motion Detectors",
        "Energy Meters",
        "Air Quality Monitors",
        "Water Flow Sensors",
        "Light Level Sensors",
        "Smart Thermostats",
        "Equipment Vibration Sensors"
      ],
      benefits: [
        {
          title: "Reduced Energy Consumption",
          description: "Smart buildings typically reduce energy usage by 20-30% through intelligent HVAC control, lighting automation, and demand-based optimization."
        },
        {
          title: "Improved Occupant Comfort",
          description: "Granular control of environmental conditions leads to improved thermal comfort, better air quality, and enhanced lighting—all contributing to occupant productivity and satisfaction."
        },
        {
          title: "Proactive Maintenance",
          description: "IoT sensors detect equipment anomalies before failure occurs, enabling preventative maintenance that reduces downtime and extends asset life."
        },
        {
          title: "Space Optimization",
          description: "Occupancy data allows for better space utilization planning, potentially reducing real estate needs or optimizing existing layouts."
        }
      ]
    },
    energy: {
      title: "Energy Management",
      description: "Take control of your energy consumption with our comprehensive energy management solutions. Monitor, analyze, and optimize energy usage across all systems and spaces to reduce costs and meet sustainability goals.",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      color: "bg-yellow-500",
      metrics: [
        { title: "Peak Demand Reduction", value: "28%", change: "+5% from last quarter", isPositive: true },
        { title: "kWh Consumption", value: "128.5 kWh", change: "-12% from yesterday", isPositive: true },
        { title: "Energy Cost", value: "$1,245.80", change: "-8% from last month", isPositive: true },
        { title: "Renewable Usage", value: "32%", change: "+10% from last year", isPositive: true }
      ],
      chart: (
        <div className="bg-gray-800/50 p-4 rounded-lg h-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Energy Distribution</h3>
          </div>
          <div className="h-56 flex items-center justify-center">
            <div className="relative h-56 w-56">
              <svg viewBox="0 0 100 100" className="h-full w-full transform -rotate-90">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#1f2937" 
                  strokeWidth="10"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="10" 
                  strokeDasharray="282.7"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="10" 
                  strokeDasharray="282.7"
                  strokeDashoffset="113.1"
                  strokeLinecap="round"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth="10" 
                  strokeDasharray="282.7"
                  strokeDashoffset="197.9"
                  strokeLinecap="round"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  strokeDasharray="282.7"
                  strokeDashoffset="254.4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold">128.5</span>
                <span className="text-sm text-gray-400">kWh Today</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm">HVAC (40%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm">Lighting (25%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm">Equipment (15%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm">Other (10%)</span>
            </div>
          </div>
        </div>
      ),
      sensors: [
        "Smart Meters",
        "Circuit-level Power Monitors",
        "Equipment Power Analyzers",
        "Voltage & Current Sensors",
        "Thermal Imaging Sensors",
        "Solar Production Monitors",
        "Battery Storage Sensors",
        "Power Factor Analyzers"
      ],
      benefits: [
        {
          title: "Cost Reduction",
          description: "Typical energy management implementations result in 15-30% cost savings through reduced consumption and peak demand management."
        },
        {
          title: "Carbon Footprint Reduction",
          description: "By optimizing energy usage and shifting to renewables when possible, organizations can significantly reduce their carbon emissions."
        },
        {
          title: "Improved Grid Stability",
          description: "Demand response capabilities allow participation in utility programs that both generate revenue and improve grid stability."
        },
        {
          title: "Regulatory Compliance",
          description: "Automated monitoring and reporting simplifies compliance with increasingly stringent energy efficiency and carbon reporting requirements."
        }
      ]
    },
    airquality: {
      title: "Air Quality Monitoring",
      description: "Ensure healthy indoor environments with our comprehensive air quality monitoring solutions. Track temperature, humidity, CO₂, particulate matter, and VOCs in real-time to maintain optimal conditions for occupants.",
      icon: <Wind className="h-8 w-8 text-teal-500" />,
      color: "bg-teal-500",
      metrics: [
        { title: "IAQ Score", value: "87/100", change: "+2 points from yesterday", isPositive: true },
        { title: "CO₂ Levels", value: "650 ppm", change: "Within normal range", isPositive: true },
        { title: "PM2.5", value: "15 μg/m³", change: "-5 from last week", isPositive: true },
        { title: "VOCs", value: "200 ppb", change: "-8% from last month", isPositive: true }
      ],
      chart: (
        <div className="bg-gray-800/50 p-4 rounded-lg h-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">CO₂ Levels Over Time</h3>
          </div>
          <div className="h-48 w-full">
            <svg viewBox="0 0 300 100" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 C20,40 40,60 60,50 C80,40 100,60 120,70 C140,80 160,30 180,20 C200,10 220,50 240,60 C260,70 280,30 300,20"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2"
              />
              <path
                d="M0,50 C20,40 40,60 60,50 C80,40 100,60 120,70 C140,80 160,30 180,20 C200,10 220,50 240,60 C260,70 280,30 300,20 V100 H0 Z"
                fill="url(#gradient)"
              />
              <line x1="0" y1="80" x2="300" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
              <text x="310" y="83" fontSize="8" fill="#94a3b8">1000 ppm</text>
              <line x1="0" y1="50" x2="300" y2="50" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
              <text x="310" y="53" fontSize="8" fill="#94a3b8">800 ppm</text>
              <line x1="0" y1="20" x2="300" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
              <text x="310" y="23" fontSize="8" fill="#94a3b8">600 ppm</text>
            </svg>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>8:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
          </div>
        </div>
      ),
      sensors: [
        "CO₂ Sensors",
        "Particulate Matter (PM1, PM2.5, PM10) Sensors",
        "VOC Sensors",
        "Temperature & Humidity Sensors",
        "Air Pressure Differential Sensors",
        "Ozone Detectors",
        "Carbon Monoxide Sensors",
        "Airflow Sensors"
      ],
      benefits: [
        {
          title: "Healthier Indoor Environments",
          description: "Real-time monitoring ensures optimal air quality, reducing sick building syndrome and improving occupant health."
        },
        {
          title: "Enhanced Cognitive Performance",
          description: "Studies show that improved air quality can increase cognitive function by up to 61%, boosting productivity."
        },
        {
          title: "Energy Optimization",
          description: "Demand-controlled ventilation based on air quality data can reduce HVAC energy consumption by 10-20%."
        },
        {
          title: "Regulatory Compliance",
          description: "Automated monitoring simplifies compliance with ASHRAE, OSHA, and local air quality standards."
        }
      ]
    },
    retail: {
      title: "Retail & Grocery",
      description: "Transform your retail operations with our specialized IoT solutions for stores and supermarkets. From refrigeration monitoring to inventory tracking and customer analytics, our integrated platform enhances efficiency and customer experience.",
      icon: <ShoppingCart className="h-8 w-8 text-orange-500" />,
      color: "bg-orange-500",
      metrics: [
        { title: "Refrigeration Compliance", value: "99.8%", change: "+2.3% from last quarter", isPositive: true },
        { title: "Energy Usage", value: "-18%", change: "vs. industry average", isPositive: true },
        { title: "Food Waste", value: "-32%", change: "from last year", isPositive: true },
        { title: "Customer Satisfaction", value: "4.7/5", change: "+0.4 from last year", isPositive: true }
      ],
      chart: (
        <div className="bg-gray-800/50 p-4 rounded-lg h-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Refrigeration Temperature</h3>
          </div>
          <div className="h-48 w-full">
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0 right-0 h-1/4 border-b border-dashed border-gray-600 flex justify-between items-start">
                <span className="text-xs text-gray-400">-15°C</span>
                <span className="text-xs text-red-400">Critical High</span>
              </div>
              <div className="absolute top-1/4 left-0 right-0 h-1/4 border-b border-dashed border-gray-600 flex justify-between items-start">
                <span className="text-xs text-gray-400">-18°C</span>
                <span className="text-xs text-gray-400">High</span>
              </div>
              <div className="absolute top-2/4 left-0 right-0 h-1/4 border-b border-dashed border-gray-600 flex justify-between items-start">
                <span className="text-xs text-gray-400">-21°C</span>
                <span className="text-xs text-green-400">Optimal</span>
              </div>
              <div className="absolute top-3/4 left-0 right-0 h-1/4 flex justify-between items-start">
                <span className="text-xs text-gray-400">-24°C</span>
                <span className="text-xs text-gray-400">Low</span>
              </div>
              
              <svg viewBox="0 0 300 100" className="h-full w-full overflow-visible">
                <path
                  d="M0,60 C10,58 20,59 30,57 C40,55 50,54 60,56 C70,58 80,59 90,60 C100,61 110,60 120,62 C130,64 140,63 150,61 C160,59 170,60 180,58 C190,56 200,55 210,57 C220,59 230,60 240,58 C250,56 260,55 270,56 C280,57 290,58 300,60"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                />
              </svg>
              
              <div className="absolute bottom-8 right-4 bg-gray-800/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-sm text-gray-400">Current</div>
                    <div className="text-xl font-bold">-20.5°C</div>
                  </div>
                  <div className="text-green-400">
                    Within range
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      sensors: [
        "Temperature Sensors for Refrigeration",
        "Humidity Sensors",
        "Door Open/Close Sensors",
        "Power Consumption Monitors",
        "Pressure Sensors",
        "Gas Leak Detectors",
        "Vibration Sensors",
        "Air Flow Sensors"
      ],
      benefits: [
        {
          title: "Food Safety Compliance",
          description: "Automated temperature monitoring ensures compliance with HACCP and other food safety regulations."
        },
        {
          title: "Reduced Energy Consumption",
          description: "Smart refrigeration control typically reduces energy consumption by 15-30% while extending equipment life."
        },
        {
          title: "Minimized Food Waste",
          description: "Early detection of refrigeration issues reduces spoilage and waste, improving sustainability and profitability."
        },
        {
          title: "Operational Efficiency",
          description: "Staff time is redirected from manual temperature checks to higher-value customer service activities."
        }
      ]
    },
    assets: {
      title: "Asset Management",
      description: "Maximize equipment performance and lifespan with our comprehensive asset management solution. Monitor performance metrics in real-time, predict maintenance needs, and optimize operations across your entire asset portfolio.",
      icon: <Gauge className="h-8 w-8 text-purple-500" />,
      color: "bg-purple-500",
      metrics: [
        { title: "Equipment Efficiency", value: "87%", change: "-3% from last month", isPositive: false },
        { title: "Uptime", value: "99.2%", change: "+0.5% from last month", isPositive: true },
        { title: "PM Compliance", value: "92%", change: "+4% from last month", isPositive: true },
        { title: "Maintenance Cost", value: "$12,450", change: "-6% from last month", isPositive: true }
      ],
      chart: (
        <div className="bg-gray-800/50 p-4 rounded-lg h-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Equipment Performance</h3>
          </div>
          <div className="h-48 w-full">
            <svg viewBox="0 0 300 100" className="h-full w-full overflow-visible">
              <path
                d="M0,20 C10,22 20,20 30,25 C40,30 50,25 60,20 C70,15 80,20 90,25 C100,30 110,25 120,20 C130,15 140,20 150,25 C160,30 170,25 180,20 C190,15 200,20 210,25 C220,30 230,25 240,20 C250,15 260,20 270,25 C280,30 290,25 300,20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path
                d="M0,80 C10,75 20,70 30,75 C40,80 50,75 60,70 C70,65 80,70 90,80 C100,90 110,85 120,75 C130,65 140,70 150,80 C160,90 170,85 180,75 C190,65 200,70 210,80 C220,90 230,85 240,75 C250,65 260,70 270,80 C280,90 290,85 300,75"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-400">Efficiency</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-gray-400">Runtime</span>
            </div>
          </div>
        </div>
      ),
      sensors: [
        "Vibration Sensors",
        "Temperature Sensors",
        "Acoustic Sensors",
        "Pressure Sensors",
        "Flow Meters",
        "Power Quality Analyzers",
        "Motor Current Sensors",
        "RPM/Speed Sensors"
      ],
      benefits: [
        {
          title: "Reduced Maintenance Costs",
          description: "Condition-based maintenance reduces overall maintenance costs by 15-25% compared to scheduled maintenance approaches."
        },
        {
          title: "Extended Equipment Life",
          description: "Early issue detection and proper maintenance typically extends equipment life by 20-40%."
        },
        {
          title: "Decreased Downtime",
          description: "Predictive maintenance reduces unplanned downtime by 30-50%, improving overall operational efficiency."
        },
        {
          title: "Optimized Staffing",
          description: "Maintenance teams can be deployed more effectively, focusing on equipment that truly needs attention rather than routine checks."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-4">IoT Use Cases</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover how IoT X solutions can transform your operations across various industries and applications
        </p>

        {/* Use Case Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(useCases).map(([key, useCase]) => (
            <button
              key={key}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeUseCase === key
                  ? `${useCase.color} text-white`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveUseCase(key)}
            >
              {useCase.icon}
              <span className="ml-2">{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden shadow-xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div className="md:max-w-2xl">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${useCases[activeUseCase].color}`}>
                    {useCases[activeUseCase].icon}
                  </div>
                  <h2 className="text-2xl font-bold ml-4">{useCases[activeUseCase].title}</h2>
                </div>
                <p className="text-gray-400">
                  {useCases[activeUseCase].description}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {useCases[activeUseCase].metrics.map((metric, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">{metric.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <span className={`text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Chart */}
              {useCases[activeUseCase].chart}
              
              {/* Sensors Used */}
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Sensors & Devices Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {useCases[activeUseCase].sensors.map((sensor, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-2 rounded-lg bg-gray-800/60 border border-gray-700"
                    >
                      <CircuitBoard className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-sm">{sensor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases[activeUseCase].benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-500"
                  >
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage; 