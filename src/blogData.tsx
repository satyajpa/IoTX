import React from 'react';

// Define the blog post type
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  image: string;
  featured: boolean;
  fullContent: React.ReactNode;
}

// Get all unique categories for filter
export const allCategories = ["All", "Healthcare", "Manufacturing", "Real Estate", "Retail", "Smart Cities", "Industrial", "Utilities", "Maintenance"];

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How IoT Sensors Are Revolutionizing Hospital Air Quality Compliance",
    excerpt: "Real-time monitoring, automated alerts, and regulation adherence are transforming healthcare facilities.",
    category: "Healthcare",
    categoryColor: "bg-green-500",
    readTime: "7 min read",
    date: "Apr 15, 2023",
    image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    fullContent: (
      <>
        <h2>The Critical Importance of Air Quality in Healthcare Settings</h2>
        <p>
          In today's healthcare facilities, maintaining optimal air quality is not just about comfort—it's a critical component of patient safety, regulatory compliance, and operational efficiency. Traditional air quality monitoring methods, which often rely on manual readings and periodic inspections, are increasingly insufficient in a healthcare environment where rapid response to contamination events can mean the difference between safety and a potentially dangerous situation.
        </p>
        <p>
          The integration of Internet of Things (IoT) sensors into hospital air quality management systems represents a paradigm shift in how healthcare facilities approach this vital aspect of their operations. With real-time monitoring capabilities, automated alert systems, and comprehensive data analytics, IoT solutions are enabling healthcare providers to maintain stricter adherence to regulations while simultaneously improving patient outcomes and operational efficiency.
        </p>

        <h3>The Regulatory Landscape</h3>
        <p>
          Healthcare facilities face a complex web of regulations governing air quality, including standards set by:
        </p>
        <ul>
          <li>The Joint Commission (TJC)</li>
          <li>Centers for Medicare and Medicaid Services (CMS)</li>
          <li>American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)</li>
          <li>State and local health departments</li>
        </ul>

        <h3>The IoT Solution: Real-Time Monitoring and Response</h3>
        <p>
          IoT sensors transform air quality management by providing continuous, real-time data streams that enable healthcare facilities to:
        </p>
        <ul>
          <li><strong>Monitor continuously:</strong> Unlike manual readings taken periodically, IoT sensors provide 24/7 monitoring of all critical parameters.</li>
          <li><strong>Respond proactively:</strong> Automated alerts trigger when parameters approach threshold limits, allowing for intervention before violations occur.</li>
          <li><strong>Document comprehensively:</strong> Automated record-keeping creates audit-ready documentation of compliance efforts.</li>
        </ul>

        <h3>Key Benefits and Results</h3>
        <p>
          Healthcare facilities implementing IoT-based air quality monitoring systems report:
        </p>
        <ul>
          <li>60%+ reduction in air quality compliance violations</li>
          <li>40%+ decrease in hospital-acquired respiratory infections</li>
          <li>Significant cost savings in penalties and remediation</li>
          <li>Improved staff productivity with elimination of manual checks</li>
        </ul>

        <p>
          As the technology continues to mature and integration with other hospital systems deepens, IoT-based air quality monitoring will likely become the standard of care across all healthcare facilities, driving improved outcomes and safer environments for patients and staff alike.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Smart Inventory Management: IoT Solutions for Manufacturing Supply Chains",
    excerpt: "BLE and UWB tracking, predictive restocking, and waste reduction strategies for modern manufacturing.",
    category: "Manufacturing",
    categoryColor: "bg-blue-500",
    readTime: "9 min read",
    date: "Mar 28, 2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
    fullContent: (
      <>
        <h2>Revolutionizing Inventory Management with IoT</h2>
        <p>
          Manufacturing supply chains are undergoing a profound transformation through the implementation of IoT technology. The traditional approach to inventory management—often characterized by manual counts, spreadsheet tracking, and reactive restocking—is rapidly giving way to connected, intelligent systems that provide unprecedented visibility and control.
        </p>
        
        <h3>Key IoT Technologies Transforming Inventory Management</h3>
        <p>
          Several technological advances are enabling more efficient and accurate inventory tracking:
        </p>
        
        <ul>
          <li><strong>Bluetooth Low Energy (BLE) Beacons:</strong> Cost-effective tracking for high-value assets with moderate accuracy requirements</li>
          <li><strong>Ultra-Wideband (UWB) Positioning:</strong> High-precision location tracking for critical components and tools</li>
          <li><strong>RFID Systems:</strong> Automated inventory counts without line-of-sight requirements</li>
          <li><strong>Smart Shelving:</strong> Weight-sensing shelves that automatically monitor inventory levels</li>
        </ul>
        
        <h3>Real-World Applications and Benefits</h3>
        <p>
          Manufacturing facilities implementing IoT-based inventory management systems report significant improvements:
        </p>
        
        <ul>
          <li>Inventory accuracy rates improved from 63% to 95%</li>
          <li>Reduction in stockouts by over 80%</li>
          <li>Decrease in expedited shipping costs by 35%</li>
          <li>Labor costs for inventory management reduced by 30%</li>
          <li>Overall carrying costs decreased by 25%</li>
        </ul>
        
        <p>
          Smart inventory management isn't just about tracking what you have—it's about optimizing your entire supply chain to increase efficiency, reduce waste, and deliver better products faster to your customers.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "IoT-Powered Energy Optimization in Commercial Real Estate",
    excerpt: "Smart HVAC systems, occupancy-based lighting, and utility cost reduction techniques examined.",
    category: "Real Estate",
    categoryColor: "bg-purple-500",
    readTime: "6 min read",
    date: "May 12, 2023",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    fullContent: (
      <>
        <h2>Transforming Buildings into Energy-Efficient Assets</h2>
        <p>
          Commercial real estate properties account for approximately 40% of global energy consumption and 30% of carbon emissions. IoT technology is proving to be a game-changer in addressing these challenges, enabling property owners and managers to significantly reduce energy usage while improving tenant comfort and satisfaction.
        </p>
        
        <h3>Smart HVAC: The Core of Energy Optimization</h3>
        <p>
          HVAC systems typically account for 40-60% of a commercial building's energy consumption. IoT solutions enable:
        </p>
        <ul>
          <li>Predictive maintenance to keep systems running at peak efficiency</li>
          <li>Dynamic adjustment based on occupancy patterns and weather forecasts</li>
          <li>Zone-based temperature control with machine learning optimization</li>
          <li>Detection and instant alerts for abnormal energy consumption patterns</li>
        </ul>
        
        <h3>Occupancy-Based Systems: Lighting and Beyond</h3>
        <p>
          Advanced occupancy sensing goes beyond simple motion detection:
        </p>
        <ul>
          <li>Networked lighting systems that adjust brightness based on natural light levels</li>
          <li>Occupancy patterns analysis to optimize cleaning and maintenance schedules</li>
          <li>Integration with access control for complete building utilization insights</li>
        </ul>
        
        <h3>Measurable Results</h3>
        <p>
          Buildings implementing comprehensive IoT energy management solutions typically report:
        </p>
        <ul>
          <li>Energy savings of 20-30% within the first year</li>
          <li>ROI periods of 18-36 months for complete system implementations</li>
          <li>10-15% reduction in maintenance costs</li>
          <li>Increased property values and attractiveness to ESG-focused tenants</li>
        </ul>
        
        <p>
          As regulatory requirements for building energy performance increase and tenants prioritize sustainability, IoT-powered energy optimization is rapidly becoming not just advantageous but essential for competitive commercial real estate properties.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Retail Revolution: How IoT is Transforming Refrigeration Management",
    excerpt: "Refrigeration management solutions for F&B & Grocery retail stores - keeping things cool efficiently.",
    category: "Retail",
    categoryColor: "bg-orange-500",
    readTime: "5 min read",
    date: "Feb 19, 2023",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
    fullContent: (
      <>
        <h2>Refrigeration: The Hidden Opportunity in Retail Energy Efficiency</h2>
        <p>
          Refrigeration systems account for up to 60% of energy consumption in grocery and food retail environments. Beyond energy costs, refrigeration directly impacts product quality, customer satisfaction, and regulatory compliance. IoT technology is revolutionizing how retailers manage these critical systems.
        </p>
        
        <h3>Key IoT Applications in Retail Refrigeration</h3>
        <ul>
          <li><strong>Remote Temperature Monitoring:</strong> Continuous tracking with automated alerts for deviations</li>
          <li><strong>Predictive Maintenance:</strong> Early detection of compressor issues, refrigerant leaks, and other potential failures</li>
          <li><strong>Demand Response Integration:</strong> Smart management of cooling cycles to reduce peak energy usage</li>
          <li><strong>Food Safety Compliance:</strong> Automated HACCP documentation and compliance reporting</li>
        </ul>
        
        <h3>The Business Case for Smart Refrigeration</h3>
        <p>
          Retailers implementing IoT refrigeration management report:
        </p>
        <ul>
          <li>Energy savings of 15-30% on refrigeration systems</li>
          <li>Reduction in product loss due to temperature excursions by up to 40%</li>
          <li>Maintenance cost reductions of 20-30%</li>
          <li>Labor savings from automated temperature logging and compliance reporting</li>
          <li>Extended equipment life through optimized operation</li>
        </ul>
        
        <p>
          By transforming refrigeration from a maintenance liability into a data-driven asset, retailers can simultaneously reduce costs, improve sustainability metrics, and enhance food safety and quality.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "Smart Parking for Communities: Improving Parking Experience Through IoT Networks",
    excerpt: "Seamless entry, parking availability, rerouting and congestion management in modern communities.",
    category: "Smart Cities",
    categoryColor: "bg-teal-500",
    readTime: "8 min read",
    date: "Jun 7, 2023",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
    fullContent: (
      <>
        <h2>Rethinking Urban Parking Through Connected Technology</h2>
        <p>
          Urban drivers spend an average of 17 hours per year searching for parking, resulting in wasted time, increased congestion, and unnecessary emissions. Smart parking systems leverage IoT technology to transform this experience while delivering significant benefits to cities and communities.
        </p>
        
        <h3>Core Components of Smart Parking Infrastructure</h3>
        <ul>
          <li><strong>Occupancy Sensors:</strong> In-ground, camera-based, or radar systems that detect vehicle presence</li>
          <li><strong>Gateway Networks:</strong> Low-power communication networks that relay sensor data to central systems</li>
          <li><strong>Integrated Payment Systems:</strong> Mobile apps and digital payment solutions that eliminate physical tickets</li>
          <li><strong>Real-Time Guidance:</strong> Dynamic signage and mobile navigation to available spaces</li>
        </ul>
        
        <h3>Quantifiable Benefits for Stakeholders</h3>
        <p>
          Cities and communities implementing smart parking solutions report:
        </p>
        <ul>
          <li>25-30% reduction in parking-related traffic congestion</li>
          <li>10-15% decrease in emissions related to parking searches</li>
          <li>Increased parking revenue of 20-35% through optimized pricing and improved compliance</li>
          <li>Reduction in parking violations and enforcement costs</li>
          <li>Enhanced citizen satisfaction with municipal services</li>
        </ul>
        
        <p>
          As urban density increases and vehicle usage patterns evolve, smart parking systems represent a practical, high-ROI approach to improving urban mobility and resource utilization. The data collected from these systems also provides valuable insights for future urban planning and development.
        </p>
      </>
    )
  },
  {
    id: 6,
    title: "Workplace Safety Enhanced: IoT Wearables in Industrial Environments",
    excerpt: "Proximity alerts, environmental hazard detection, and fatigue monitoring for safer workplaces.",
    category: "Industrial",
    categoryColor: "bg-red-500",
    readTime: "7 min read",
    date: "Apr 2, 2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
    fullContent: (
      <>
        <h2>The Evolution of Workplace Safety Through Connected Technology</h2>
        <p>
          Industrial workplaces present numerous safety challenges, from heavy machinery to hazardous environments. IoT wearable technology is creating a new paradigm for worker safety that goes beyond traditional PPE and safety protocols, enabling proactive hazard prevention and rapid emergency response.
        </p>
        
        <h3>Essential IoT Safety Wearables and Applications</h3>
        <ul>
          <li><strong>Proximity Detection and Warning Systems:</strong> Alert workers when too close to dangerous equipment or zones</li>
          <li><strong>Environmental Monitors:</strong> Detect exposure to toxic gases, excessive noise, or extreme temperatures</li>
          <li><strong>Physiological Monitoring:</strong> Track vital signs and detect signs of heat stress, fatigue, or other health concerns</li>
          <li><strong>Location Tracking:</strong> Enable rapid response during emergencies and efficient evacuation management</li>
        </ul>
        
        <h3>Quantifiable Safety Improvements</h3>
        <p>
          Industrial facilities implementing comprehensive IoT safety wearable programs report:
        </p>
        <ul>
          <li>40-60% reduction in near-miss incidents</li>
          <li>20-35% decrease in recordable injuries</li>
          <li>50%+ improvement in emergency response times</li>
          <li>Significant reductions in workers' compensation costs and insurance premiums</li>
          <li>Enhanced safety culture and employee confidence</li>
        </ul>
        
        <p>
          By combining real-time awareness with data-driven insights for safety improvement, IoT wearables represent the future of industrial safety management—a future where predictive and preventive approaches replace reactive responses to incidents.
        </p>
      </>
    )
  },
  {
    id: 7,
    title: "Water Quality Monitoring: IoT Solutions for Utilities and Environmental Compliance",
    excerpt: "Real-time contamination detection, leak identification, and consumption tracking systems explained.",
    category: "Utilities",
    categoryColor: "bg-cyan-500",
    readTime: "6 min read",
    date: "Jan 25, 2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
    fullContent: (
      <>
        <h2>Transforming Water Management Through Continuous Monitoring</h2>
        <p>
          Water utilities face increasing challenges from aging infrastructure, climate change impacts, and evolving regulatory requirements. IoT technology offers unprecedented visibility into water quality and distribution systems, enabling proactive management and rapid response to emerging issues.
        </p>
        
        <h3>Key Applications of IoT in Water Systems</h3>
        <ul>
          <li><strong>Multi-Parameter Quality Monitoring:</strong> Real-time tracking of chemical composition, bacterial content, turbidity, and other critical parameters</li>
          <li><strong>Distribution Network Monitoring:</strong> Pressure sensors and acoustic detectors for early leak detection</li>
          <li><strong>Smart Metering:</strong> Granular consumption data and automated anomaly detection</li>
          <li><strong>Predictive Analytics:</strong> Identification of potential contamination sources and infrastructure weak points</li>
        </ul>
        
        <h3>Measurable Results for Utilities and Communities</h3>
        <p>
          Water utilities implementing IoT monitoring solutions report:
        </p>
        <ul>
          <li>Reduction in non-revenue water loss by 15-30%</li>
          <li>Contamination detection time reduced from days to minutes or hours</li>
          <li>Maintenance cost reductions of 20%+ through predictive approaches</li>
          <li>Comprehensive compliance documentation with minimal manual intervention</li>
          <li>Enhanced public confidence through transparency and rapid issue resolution</li>
        </ul>
        
        <p>
          Beyond operational benefits, IoT water monitoring contributes to larger community goals of resource conservation, public health protection, and environmental stewardship. As water challenges intensify globally, these systems are becoming essential infrastructure for resilient communities.
        </p>
      </>
    )
  },
  {
    id: 8,
    title: "Predictive Maintenance for HVAC Assets: How IoT Prevents Costly Downtime",
    excerpt: "Fault detection, diagnostics, and AI-powered failure prediction for critical building systems.",
    category: "Maintenance",
    categoryColor: "bg-amber-500",
    readTime: "8 min read",
    date: "May 30, 2023",
    image: "https://images.unsplash.com/photo-1621904878334-37068975637d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
    fullContent: (
      <>
        <h2>Moving Beyond Reactive Maintenance for Building Systems</h2>
        <p>
          HVAC systems represent 40-60% of building energy consumption and are among the most maintenance-intensive building assets. Traditional maintenance approaches—either reactive (fix it when it breaks) or preventive (scheduled inspections)—lead to unnecessary downtime, premature component replacements, and inefficient operations. IoT-enabled predictive maintenance is fundamentally changing this paradigm.
        </p>
        
        <h3>Key Technologies Enabling Predictive HVAC Maintenance</h3>
        <ul>
          <li><strong>Non-Invasive Sensors:</strong> Vibration, acoustic, thermal, and electrical monitoring without disrupting operations</li>
          <li><strong>Advanced Diagnostics:</strong> Machine learning algorithms that identify patterns preceding specific failure modes</li>
          <li><strong>Performance Benchmarking:</strong> Comparison of actual performance against digital twins and design specifications</li>
          <li><strong>Condition-Based Maintenance Scheduling:</strong> Dynamic maintenance planning based on actual equipment state</li>
        </ul>
        
        <h3>Quantifiable Business Benefits</h3>
        <p>
          Organizations implementing IoT-based predictive maintenance for HVAC systems report:
        </p>
        <ul>
          <li>Reduction in unplanned downtime by 35-45%</li>
          <li>Maintenance cost savings of 25-30%</li>
          <li>Extension of equipment useful life by 20-25%</li>
          <li>Energy efficiency improvements of 10-15% through optimized operation</li>
          <li>Significant reductions in tenant complaints and disruptions</li>
        </ul>
        
        <p>
          By detecting issues before they cause failures and addressing root causes rather than symptoms, predictive maintenance transforms HVAC systems from unpredictable cost centers into reliably managed assets. For facility managers, this means fewer emergencies, better budget predictability, and enhanced operational performance.
        </p>
      </>
    )
  }
]; 