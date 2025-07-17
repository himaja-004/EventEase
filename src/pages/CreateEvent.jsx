import { useState } from 'react';

export default function CreateEvent() {
  const [form, setForm] = useState({ title: '', date: '', location: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('events') || '[]');
    const newEvent = { ...form, id: Date.now().toString() };
    localStorage.setItem('events', JSON.stringify([...stored, newEvent]));
    alert('🎉 Event created successfully!');
    setForm({ title: '', date: '', location: '', description: '' });
  };

  return (
    <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-10 px-4 sm:px-8 lg:px-16 rounded-2xl shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. React Conference 2025"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City or venue"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Briefly describe the event"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm h-32 resize-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          ➕ Create Event
        </button>
      </form>
    </div>
  );
}
