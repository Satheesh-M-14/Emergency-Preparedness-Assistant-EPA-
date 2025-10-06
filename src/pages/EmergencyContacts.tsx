import { useState, useEffect } from 'react';
import { Phone, Plus, Trash2, CreditCard as Edit2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Contact {
  id: string;
  name: string;
  number: string;
}

const defaultContacts = [
  { name: 'Police', number: '100' },
  { name: 'Fire Service', number: '101' },
  { name: 'Ambulance', number: '102' },
  { name: 'Disaster Management', number: '108' },
  { name: 'Women Helpline', number: '1091' },
  { name: 'Child Helpline', number: '1098' },
];

export default function EmergencyContacts() {
  const [personalContacts, setPersonalContacts] = useState<Contact[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  useEffect(() => {
    const stored = localStorage.getItem('emergencyContacts');
    if (stored) {
      setPersonalContacts(JSON.parse(stored));
    }
  }, []);

  const saveContacts = (contacts: Contact[]) => {
    setPersonalContacts(contacts);
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  };

  const addContact = () => {
    if (newContact.name.trim() && newContact.number.trim()) {
      const contact: Contact = {
        id: Date.now().toString(),
        name: newContact.name.trim(),
        number: newContact.number.trim(),
      };
      saveContacts([...personalContacts, contact]);
      setNewContact({ name: '', number: '' });
      setIsAdding(false);
    }
  };

  const deleteContact = (id: string) => {
    saveContacts(personalContacts.filter((c) => c.id !== id));
  };

  const startEdit = (contact: Contact) => {
    setEditingId(contact.id);
    setNewContact({ name: contact.name, number: contact.number });
  };

  const saveEdit = () => {
    if (editingId && newContact.name.trim() && newContact.number.trim()) {
      saveContacts(
        personalContacts.map((c) =>
          c.id === editingId
            ? { ...c, name: newContact.name.trim(), number: newContact.number.trim() }
            : c
        )
      );
      setEditingId(null);
      setNewContact({ name: '', number: '' });
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    setNewContact({ name: '', number: '' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Phone className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Contacts</h1>
        <p className="text-lg text-gray-600">
          Quick access to emergency services and your personal contacts
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {defaultContacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4"
            >
              <h3 className="font-semibold mb-1">{contact.name}</h3>
              <a
                href={`tel:${contact.number}`}
                className="text-2xl font-bold hover:underline"
              >
                {contact.number}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Personal Emergency Contacts</h2>
          {!isAdding && !editingId && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Contact
            </button>
          )}
        </div>

        {(isAdding || editingId) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 p-4 bg-gray-50 rounded-lg"
          >
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Contact Name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={newContact.number}
                onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="flex gap-2">
                <button
                  onClick={editingId ? saveEdit : addContact}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  {editingId ? 'Update' : 'Save'}
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {personalContacts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Phone className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg">No personal contacts added yet</p>
            <p className="text-sm mt-2">Add important contacts for quick access during emergencies</p>
          </div>
        ) : (
          <div className="space-y-3">
            {personalContacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-green-600 hover:underline text-lg font-medium"
                  >
                    {contact.number}
                  </a>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(contact)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Tip</h3>
        <p className="text-blue-800">
          Save emergency contacts in your phone and keep a printed copy in your emergency kit.
          Include family members, neighbors, and your doctor's contact information.
        </p>
      </div>
    </div>
  );
}
