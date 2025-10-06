import { Link, useLocation } from 'react-router-dom';
import { Shield, Home, AlertTriangle, Package, Phone, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/tips', label: 'Disaster Tips', icon: AlertTriangle },
  { path: '/checklist', label: 'Emergency Kit', icon: Package },
  { path: '/contacts', label: 'Contacts', icon: Phone },
  { path: '/safe-zones', label: 'Safe Zones', icon: MapPin },
  { path: '/education', label: 'Education', icon: BookOpen },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Shield className="w-8 h-8 text-red-600 group-hover:text-red-700 transition-colors" />
              <span className="text-xl font-bold text-gray-900">EPA</span>
            </Link>

            <div className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden">
              <div className="flex gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`p-2 rounded-lg transition-all ${
                        isActive
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-red-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </motion.main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            Emergency Preparedness Assistant - Stay Safe, Stay Prepared
          </p>
        </div>
      </footer>
    </div>
  );
}
