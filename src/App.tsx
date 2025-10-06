import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DisasterTips from './pages/DisasterTips';
import EmergencyKit from './pages/EmergencyKit';
import EmergencyContacts from './pages/EmergencyContacts';
import SafeZones from './pages/SafeZones';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<DisasterTips />} />
          <Route path="/checklist" element={<EmergencyKit />} />
          <Route path="/contacts" element={<EmergencyContacts />} />
          <Route path="/safe-zones" element={<SafeZones />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
