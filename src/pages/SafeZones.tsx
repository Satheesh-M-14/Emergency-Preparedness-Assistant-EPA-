import { MapPin, School, Building2, Cross, Home, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const safeZoneTypes = [
  {
    icon: School,
    title: 'Schools & Community Centers',
    description: 'Often designated as emergency shelters with basic facilities',
    color: 'bg-blue-500',
  },
  {
    icon: Building2,
    title: 'Government Buildings',
    description: 'Municipal offices and public buildings designed for emergencies',
    color: 'bg-green-500',
  },
  {
    icon: Cross,
    title: 'Hospitals & Medical Centers',
    description: 'Medical facilities with emergency care and resources',
    color: 'bg-red-500',
  },
  {
    icon: Home,
    title: 'Designated Shelters',
    description: 'Purpose-built emergency shelters in your area',
    color: 'bg-purple-500',
  },
];

const evacuationSteps = [
  {
    step: 1,
    title: 'Stay Calm and Alert',
    description: 'Monitor official emergency broadcasts and follow instructions from authorities',
  },
  {
    step: 2,
    title: 'Prepare Your Emergency Kit',
    description: 'Grab your pre-packed emergency supplies and important documents',
  },
  {
    step: 3,
    title: 'Secure Your Home',
    description: 'Turn off utilities, lock doors and windows, leave a note about your destination',
  },
  {
    step: 4,
    title: 'Choose Your Route',
    description: 'Use designated evacuation routes. Avoid shortcuts and flooded areas',
  },
  {
    step: 5,
    title: 'Head to Safe Zone',
    description: 'Go to the nearest designated shelter or safe zone. Do not return home until authorities say it is safe',
  },
  {
    step: 6,
    title: 'Check In',
    description: 'Register at the shelter and inform family members of your location',
  },
];

export default function SafeZones() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <MapPin className="w-16 h-16 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Safe Zones & Evacuation</h1>
        <p className="text-lg text-gray-600">
          Know where to go and how to evacuate safely during emergencies
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Safe Zones</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {safeZoneTypes.map((zone, index) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
              >
                <div className={`${zone.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{zone.title}</h3>
                <p className="text-sm text-gray-600">{zone.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Locating Safe Zones</h2>
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <p className="text-gray-700 font-medium">Safe Zone Map Placeholder</p>
            <p className="text-sm text-gray-600 mt-2">Contact local authorities for safe zone locations in your area</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <School className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Schools</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Public Buildings</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <Cross className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Medical Centers</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Evacuation Steps</h2>
        <div className="space-y-4">
          {evacuationSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-2" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Important</h3>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Never ignore evacuation orders</li>
                <li>• Know multiple evacuation routes</li>
                <li>• Plan for pets and special needs</li>
                <li>• Keep fuel tank at least half full</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Local Resources</h3>
              <p className="text-sm text-blue-800 mb-2">
                Contact your local emergency management office to:
              </p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Get detailed evacuation maps</li>
                <li>• Learn about designated shelters</li>
                <li>• Register for emergency alerts</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
