import { useParams, Link } from 'react-router-dom';
import { mockEvents } from './events';

export default function EventDetails() {
  const { id } = useParams();
  const event = mockEvents.find(e => e.id === id);

  if (!event) return <p className="text-center text-red-600 mt-10 text-xl font-semibold">⚠️ Event not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10 mt-10">
      
      <div className="lg:col-span-2">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img src={event.imageBanner} alt={event.title} className="w-full h-auto" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag, i) => (
            <span key={i} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>

        <div className="flex items-center mt-4 gap-4">
          <span className="text-green-600 font-semibold">👍 {event.interestedCount} are interested</span>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100 transition">I'm Interested</button>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-2">About The Event</h3>
          <p className="text-gray-700 text-md leading-relaxed">
            🌟 {event.description} <br /><br />
            📢 Hurry! Seats are limited.
          </p>
        </div>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <ul className="text-gray-700 space-y-3">
          <li>📅 <strong>{event.date}</strong></li>
          <li>⏱️ <strong>{event.duration}</strong></li>
          <li>👥 All age groups</li>
          <li>🗣️ {event.languages.join(', ')}</li>
          <li>📍 {event.location}</li>
        </ul>

        <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded mt-4 text-sm">
          ⚠️ Bookings are filling fast!
        </div>

        <div className="mt-4">
          <p className="text-xl font-bold text-red-600">{event.price}</p>
          <p className="text-sm text-red-500">Filling Fast</p>
        </div>

        <Link to={`/event/${event.id}/book`}>
          <button className="w-full mt-6 bg-rose-500 hover:bg-rose-600 transition text-white py-3 rounded-lg font-bold text-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
