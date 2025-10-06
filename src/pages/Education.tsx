import { BookOpen, ExternalLink, Lightbulb, Users, FileText, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Understanding Natural Disasters',
    description: 'Learn about different types of natural disasters, their causes, and how they impact communities.',
    icon: Lightbulb,
    color: 'bg-yellow-500',
  },
  {
    title: 'Family Emergency Planning',
    description: 'Create a comprehensive family emergency plan including communication strategies and meeting points.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'First Aid Basics',
    description: 'Essential first aid skills everyone should know for emergency situations and disaster response.',
    icon: FileText,
    color: 'bg-green-500',
  },
  {
    title: 'Home Safety Assessment',
    description: 'Identify potential hazards in your home and learn how to make it safer during disasters.',
    icon: BookOpen,
    color: 'bg-purple-500',
  },
];

const resources = [
  {
    name: 'National Disaster Management Authority (NDMA)',
    description: 'Official government guidelines and disaster management resources',
    url: 'https://ndma.gov.in',
  },
  {
    name: 'International Red Cross',
    description: 'Global humanitarian aid and disaster relief information',
    url: 'https://www.icrc.org',
  },
  {
    name: 'Ready.gov',
    description: 'Comprehensive emergency preparedness resources',
    url: 'https://www.ready.gov',
  },
  {
    name: 'FEMA',
    description: 'Federal Emergency Management Agency resources and training',
    url: 'https://www.fema.gov',
  },
];

const videos = [
  {
    title: 'Earthquake Safety: Drop, Cover, Hold On',
    description: 'Learn the proper technique to protect yourself during an earthquake',
  },
  {
    title: 'How to Use a Fire Extinguisher',
    description: 'Step-by-step guide on operating fire extinguishers safely',
  },
  {
    title: 'Flood Safety and Preparedness',
    description: 'Essential tips for staying safe before, during, and after floods',
  },
  {
    title: 'CPR and Basic Life Support',
    description: 'Life-saving techniques everyone should know',
  },
];

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <BookOpen className="w-16 h-16 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Awareness & Education</h1>
        <p className="text-lg text-gray-600">
          Expand your knowledge about disaster preparedness and emergency response
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Knowledge Saves Lives</h2>
        <p className="text-lg mb-4">
          Being informed and prepared can make the difference between life and death during emergencies.
          Take time to educate yourself and your family about disaster preparedness.
        </p>
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`${article.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Video className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">Video Tutorials</h2>
        </div>
        <div className="space-y-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Official Resources</h2>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all group border-2 border-transparent hover:border-blue-200"
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {resource.name}
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg"
        >
          <h3 className="text-lg font-bold text-green-900 mb-2">Practice Makes Perfect</h3>
          <p className="text-sm text-green-800">
            Conduct regular emergency drills with your family. Practice evacuation routes,
            emergency communication, and first aid skills to be better prepared.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg"
        >
          <h3 className="text-lg font-bold text-purple-900 mb-2">Stay Informed</h3>
          <p className="text-sm text-purple-800">
            Subscribe to local emergency alerts, follow weather updates, and stay connected
            with community emergency management programs.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
