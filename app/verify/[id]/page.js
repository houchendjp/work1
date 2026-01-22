// app/verify/[id]/page.js
'use client'; // Needed for interactivity
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Verify() {
  const [loading, setLoading] = useState(true);

  // Simulate AI "Thinking"
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <Link href="/timeline" className="text-blue-600">Cancel</Link>
        <span className="font-bold">Verify Event</span>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      {/* PDF Preview Area */}
      <div className="bg-gray-200 p-8 m-4 rounded-lg h-48 flex items-center justify-center text-gray-500">
        📄 PDF PREVIEW
      </div>

      {/* The AI Magic Box */}
      <div className="flex-1 p-4">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-green-200 rounded w-3/4"></div>
            <div className="h-4 bg-green-200 rounded w-1/2"></div>
            <div className="text-center text-green-600 mt-4 text-sm">
              ✨ AI extracting data...
            </div>
          </div>
        ) : (
          <div className="border-2 border-green-500 border-dashed rounded-lg p-4 bg-green-50">
            <h3 className="text-green-800 font-bold mb-4">✨ AI Extracted Data</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Title</span>
                <span className="font-medium">Tax Payment</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Date</span>
                <span className="font-medium">15 May 2026</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Amount</span>
                <span className="font-bold text-red-600">3.500 DKK</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      {!loading && (
        <div className="p-4 mb-4">
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold shadow-lg">
            ✅ Add to Calendar
          </button>
        </div>
      )}
    </div>
  );
}