"use client";

import { useState } from "react";

export default function TestPage() {
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    const fakeScore = Math.floor(Math.random() * 100);
    setScore(fakeScore);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">
        Backend Skill Assessment
      </h1>

      <textarea
        className="w-full h-64 p-4 border rounded-xl mb-6"
        placeholder="Write your backend code here..."
      />

      <button
        onClick={handleSubmit}
        className="bg-primary text-white px-6 py-3 rounded-xl"
      >
        Submit for AI Evaluation
      </button>

      {score !== null && (
        <div className="mt-6 text-xl font-semibold">
          AI Score: {score}/100
        </div>
      )}
    </div>
  );
}
