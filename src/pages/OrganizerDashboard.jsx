import { useEffect, useState } from 'react';

export default function OrganizerDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(stored);
  }, []);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">My Events</h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="border border-gray-200 p-5 rounded-xl shadow-sm bg-gradient-to-br from-white via-gray-50 to-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    📅 {event.date} &nbsp;•&nbsp; 📍 {event.location}
                  </p>
                  <p className="text-gray-700 text-sm">{event.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
