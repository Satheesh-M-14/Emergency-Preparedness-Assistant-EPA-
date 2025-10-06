import { useState, useEffect } from 'react';
import { Check, Package } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChecklistItem {
  id: string;
  name: string;
  category: string;
  description: string;
}

const checklistItems: ChecklistItem[] = [
  { id: '1', name: 'Water (1 gallon per person per day for 3 days)', category: 'Essentials', description: 'For drinking and sanitation' },
  { id: '2', name: 'Non-perishable food (3-day supply)', category: 'Essentials', description: 'Canned goods, energy bars, dried fruits' },
  { id: '3', name: 'Battery-powered or hand crank radio', category: 'Communication', description: 'NOAA Weather Radio if possible' },
  { id: '4', name: 'Flashlight', category: 'Tools', description: 'With extra batteries' },
  { id: '5', name: 'First aid kit', category: 'Medical', description: 'Include prescription medications' },
  { id: '6', name: 'Extra batteries', category: 'Tools', description: 'Various sizes' },
  { id: '7', name: 'Whistle', category: 'Tools', description: 'To signal for help' },
  { id: '8', name: 'Dust mask', category: 'Safety', description: 'Filter contaminated air' },
  { id: '9', name: 'Plastic sheeting and duct tape', category: 'Tools', description: 'For shelter-in-place' },
  { id: '10', name: 'Moist towelettes', category: 'Hygiene', description: 'For sanitation' },
  { id: '11', name: 'Garbage bags', category: 'Hygiene', description: 'For waste disposal' },
  { id: '12', name: 'Wrench or pliers', category: 'Tools', description: 'Turn off utilities' },
  { id: '13', name: 'Manual can opener', category: 'Tools', description: 'For canned food' },
  { id: '14', name: 'Local maps', category: 'Navigation', description: 'GPS may not work' },
  { id: '15', name: 'Cell phone with chargers', category: 'Communication', description: 'Include backup battery' },
  { id: '16', name: 'Prescription medications', category: 'Medical', description: '7-day supply' },
  { id: '17', name: 'Eyeglasses and contact lens solution', category: 'Medical', description: 'If needed' },
  { id: '18', name: 'Cash and credit cards', category: 'Documents', description: 'ATMs may not work' },
  { id: '19', name: 'Important family documents', category: 'Documents', description: 'In waterproof container' },
  { id: '20', name: 'Sleeping bag or warm blanket', category: 'Comfort', description: 'For each person' },
  { id: '21', name: 'Change of clothing', category: 'Comfort', description: 'Include sturdy shoes' },
  { id: '22', name: 'Fire extinguisher', category: 'Safety', description: 'Know how to use it' },
  { id: '23', name: 'Matches in waterproof container', category: 'Tools', description: 'For emergency use' },
  { id: '24', name: 'Feminine supplies and personal hygiene items', category: 'Hygiene', description: 'As needed' },
  { id: '25', name: 'Dishes, utensils, and cooking tools', category: 'Essentials', description: 'Paper plates, plastic utensils' },
  { id: '26', name: 'Pet supplies', category: 'Pets', description: 'Food, water, medications' },
  { id: '27', name: 'Baby supplies', category: 'Children', description: 'Formula, diapers, bottles' },
];

export default function EmergencyKit() {
  const [packedItems, setPackedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem('emergencyKit');
    if (stored) {
      setPackedItems(new Set(JSON.parse(stored)));
    }
  }, []);

  const toggleItem = (id: string) => {
    const newPacked = new Set(packedItems);
    if (newPacked.has(id)) {
      newPacked.delete(id);
    } else {
      newPacked.add(id);
    }
    setPackedItems(newPacked);
    localStorage.setItem('emergencyKit', JSON.stringify([...newPacked]));
  };

  const categories = [...new Set(checklistItems.map((item) => item.category))];
  const progress = (packedItems.size / checklistItems.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Package className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Kit Checklist</h1>
        <p className="text-lg text-gray-600">
          Prepare your emergency kit with these essential items
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
          <span className="text-sm font-medium text-gray-600">
            {packedItems.size} / {checklistItems.length} items packed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
          />
        </div>
      </div>

      {categories.map((category, categoryIndex) => {
        const categoryItems = checklistItems.filter((item) => item.category === category);
        const packedCount = categoryItems.filter((item) => packedItems.has(item.id)).length;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">{category}</h2>
              <span className="text-sm text-gray-600">
                {packedCount} / {categoryItems.length}
              </span>
            </div>
            <div className="space-y-3">
              {categoryItems.map((item) => {
                const isPacked = packedItems.has(item.id);
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isPacked
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isPacked ? 'bg-blue-500' : 'bg-gray-200'
                        }`}
                      >
                        {isPacked && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold mb-1 ${
                            isPacked ? 'text-blue-900 line-through' : 'text-gray-900'
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );
      })}

      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
          <p className="text-lg">
            Your emergency kit is complete. Remember to check and update it regularly.
          </p>
        </motion.div>
      )}
    </div>
  );
}
