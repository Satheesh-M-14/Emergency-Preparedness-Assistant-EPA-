import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Package, Phone, MapPin, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: AlertTriangle,
    title: 'Disaster Tips',
    description: 'Comprehensive safety guidelines for floods, fires, earthquakes, and cyclones',
    link: '/tips',
    color: 'bg-orange-500',
  },
  {
    icon: Package,
    title: 'Emergency Kit',
    description: 'Checklist of essential items to prepare for any emergency',
    link: '/checklist',
    color: 'bg-blue-500',
  },
  {
    icon: Phone,
    title: 'Emergency Contacts',
    description: 'Quick access to emergency services and personal contacts',
    link: '/contacts',
    color: 'bg-green-500',
  },
  {
    icon: MapPin,
    title: 'Safe Zones',
    description: 'Locate nearby shelters and learn evacuation procedures',
    link: '/safe-zones',
    color: 'bg-purple-500',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Learn about disaster preparedness and awareness',
    link: '/education',
    color: 'bg-red-500',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <div className="flex justify-center mb-6">
          <Shield className="w-20 h-20 text-red-600" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Emergency Preparedness Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive guide to preparing for and responding to natural disasters.
          Stay informed, stay safe, and be ready when it matters most.
        </p>
      </motion.section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={feature.link}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-red-600 font-medium group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Be Prepared, Not Scared</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Natural disasters can happen anytime. Take the first step towards safety by
          preparing your emergency kit and learning essential survival skills.
        </p>
        <Link
          to="/checklist"
          className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your Emergency Kit
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.section>
    </div>
  );
}
