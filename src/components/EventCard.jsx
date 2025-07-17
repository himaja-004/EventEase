import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 border border-blue-200 shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
      <p className="text-sm text-gray-500 mb-4">
        📅 {event.date} &nbsp;&nbsp; 📍{event.location}
      </p>
      <p className="text-gray-600 text-sm mb-4">
        {event.description}
      </p>
      <Link
        to={`/event/${event.id}`}>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}
