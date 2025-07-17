import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';
import OrganizerDashboard from './pages/OrganizerDashboard'; 
import Navbar from './components/Navbar';
import BookTicket from './pages/BookTicket'; 
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/organizer" element={<OrganizerDashboard />} /> 
        <Route path="/event/:id/book" element={<BookTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
