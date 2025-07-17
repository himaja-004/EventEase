import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockEvents = [
        {
          id: '1',
          title: 'Live Concert',
          date: '2025-07-15',
          location: 'Bangalore',
          description: 'An amazing night of music.',
        },
        {
          id: '2',
          title: 'React Workshop',
          date: '2025-08-01',
          location: 'Mumbai',
          description: 'Learn React hands-on.',
        },
        {
          id: '3',
          title: 'Standup Laugh Night',
          date: '2025-09-12',
          location: 'Chennai',
          description: 'Get ready for a night of non-stop laughs with some of the best standup comedians in the game.'
        }
      ];
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 bg-[length:400%_400%] animate-gradient-slow">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-gray-800 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming Events
      </motion.h2>

      {loading ? (
        <div className="text-center text-gray-500 py-16 text-lg animate-pulse">
          Loading events...
        </div>
      ) : events.length === 0 ? (
        <div className="text-center text-gray-500 py-16 text-lg">
          No upcoming events at the moment.
        </div>
      ) : (
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
