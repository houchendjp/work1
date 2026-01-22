// app/page.js
import Link from 'next/link';
import { emails } from './data';

export default function Inbox() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Red Header */}
      <header className="bg-red-700 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-xl">e-Boks</h1>
        <span>≡</span>
      </header>

      {/* AI Banner */}
      <Link href="/timeline">
        <div className="m-4 p-4 bg-green-100 border border-green-600 rounded-lg cursor-pointer">
          <div className="flex items-center gap-2 mb-1">
            <span>✨</span>
            <span className="font-bold text-green-800">AI Insight</span>
          </div>
          <p className="text-sm text-green-900">3 new deadlines detected</p>
          <p className="text-xs text-green-700 underline mt-1">Tap to view Timeline</p>
        </div>
      </Link>

      {/* Email List */}
      <div className="divide-y divide-gray-200">
        {emails.map((mail) => (
          <div key={mail.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between mb-1">
              <span className="font-bold text-gray-800">{mail.sender}</span>
              <span className="text-xs text-gray-500">{mail.date}</span>
            </div>
            <p className="text-sm text-gray-600">{mail.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}