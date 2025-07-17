
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function BookTicket() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', email: '', tickets: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'tickets' ? parseInt(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 ${form.tickets} ticket(s) booked for ${form.name}!`);
    setForm({ name: '', email: '', tickets: 1 });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Book Ticket for Event #{id}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full border p-2 rounded"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Number of Tickets</label>
          <input
            name="tickets"
            type="number"
            min="1"
            value={form.tickets}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          ✅ Confirm Booking
        </button>
      </form>
    </div>
  );
}
