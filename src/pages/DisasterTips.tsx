import { useState } from 'react';
import { ChevronDown, Droplets, Flame, Home as Building, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Disaster {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  tips: string[];
}

const disasters: Disaster[] = [
  {
    id: 'flood',
    title: 'Flood',
    icon: Droplets,
    color: 'bg-blue-500',
    tips: [
      'Move to higher ground immediately if flooding is imminent',
      'Avoid walking or driving through flood waters - just 6 inches can knock you down',
      'Turn off utilities and disconnect electrical appliances before evacuating',
      'Store important documents in waterproof containers',
      'Keep emergency supplies on upper floors',
      'Stay informed through weather alerts and local news',
      'Never camp or park near streams or rivers during heavy rainfall',
      'Have an evacuation plan and practice it with family members',
    ],
  },
  {
    id: 'fire',
    title: 'Fire',
    icon: Flame,
    color: 'bg-orange-500',
    tips: [
      'Install smoke detectors on every level and test them monthly',
      'Create and practice a fire escape plan with two ways out of every room',
      'Keep fire extinguishers accessible and learn how to use them',
      'Never leave cooking or candles unattended',
      'Keep flammable materials away from heat sources',
      'If caught in a fire, stay low to the ground and cover your mouth',
      'Stop, drop, and roll if your clothes catch fire',
      'Once out, stay out - never re-enter a burning building',
      'Clear vegetation and debris around your home to create defensible space',
    ],
  },
  {
    id: 'earthquake',
    title: 'Earthquake',
    icon: Building,
    color: 'bg-gray-600',
    tips: [
      'Drop, Cover, and Hold On when shaking starts - get under sturdy furniture',
      'Stay away from windows, mirrors, and heavy objects that could fall',
      'If outdoors, move away from buildings, power lines, and trees',
      'If in a vehicle, pull over safely and stay inside until shaking stops',
      'Secure heavy furniture and appliances to walls',
      'Keep emergency supplies and shoes near your bed',
      'After an earthquake, check for injuries and damage',
      'Be prepared for aftershocks - they can occur hours or days later',
      'Turn off gas if you smell it or suspect a leak',
    ],
  },
  {
    id: 'cyclone',
    title: 'Cyclone / Hurricane',
    icon: Wind,
    color: 'bg-teal-500',
    tips: [
      'Monitor weather forecasts and heed evacuation warnings',
      'Board up windows or install storm shutters',
      'Bring outdoor furniture and decorations inside',
      'Fill bathtubs and containers with water for emergency use',
      'Charge all electronic devices and have backup power sources',
      'Stock up on non-perishable food and water for at least 3 days',
      'Stay indoors in a small interior room away from windows',
      'Avoid using landline phones and electrical appliances during the storm',
      'After the storm, watch for flooding and downed power lines',
    ],
  },
];

export default function DisasterTips() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Disaster Preparedness Tips</h1>
        <p className="text-lg text-gray-600">
          Learn how to prepare for and respond to different types of natural disasters
        </p>
      </div>

      <div className="space-y-4">
        {disasters.map((disaster, index) => {
          const Icon = disaster.icon;
          const isExpanded = expandedId === disaster.id;

          return (
            <motion.div
              key={disaster.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(disaster.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`${disaster.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{disaster.title}</h2>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <ul className="space-y-3">
                        {disaster.tips.map((tip, tipIndex) => (
                          <motion.li
                            key={tipIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: tipIndex * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-semibold text-gray-700">{tipIndex + 1}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{tip}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">Important Reminder</h3>
        <p className="text-yellow-800">
          These tips are general guidelines. Always follow local authorities' instructions
          and evacuation orders during emergencies. Stay informed through official channels.
        </p>
      </div>
    </div>
  );
}
