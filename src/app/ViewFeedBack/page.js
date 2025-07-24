// app/Viewfeedback/page.js
'use client';
import { useEffect, useState } from 'react';

export default function ViewFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const res = await fetch('/api/fetch'); 
        const data = await res.json();
        setFeedbackList(data.items || []);
      } catch (err) {
        console.error('Failed to fetch feedback:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchFeedback();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Feedback</h1>

      {loading ? (
        <p>Loading...</p>
      ) : feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbackList.map((fb) => (
            <li
              key={fb._id || fb.id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <p>
                <strong>Name:</strong> {fb.name}
              </p>
              <p>
                <strong>Email:</strong> {fb.email}
              </p>
              <p>
                <strong>Message:</strong> {fb.message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(fb.createdAt || fb.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
