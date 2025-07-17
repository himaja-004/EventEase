import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [location, setLocation] = useState("Hyderabad");
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem('filterLocation', newLocation); 
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('filterSearch', searchTerm);
      navigate('/'); 
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-md backdrop-blur-sm">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-tight">
        <Link to="/" className="hover:text-yellow-300 transition">
          <span className="text-yellow-300">Event</span>Ease
        </Link>
      </h1>

      
      <div className="flex-1 md:mx-6 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search events, venues, etc..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full md:w-96 px-4 py-2 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex space-x-4 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-yellow-200 transition duration-200">
            Browse
          </Link>
          <Link to="/create" className="hover:text-yellow-200 transition duration-200">
            Create
          </Link>
          <Link to="/organizer" className="hover:text-yellow-200 transition duration-200">
            My Events
          </Link>
        </div>

        <select
          value={location}
          onChange={handleLocationChange}
          className="text-black px-3 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          {["Hyderabad","Bengaluru","Mumbai","Delhi","Chennai","Kolkata","Pune","Ahmedabad","Jaipur","Lucknow"].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
