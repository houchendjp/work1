// app/timeline/page.js
import Link from 'next/link';
import { timelineEvents } from '../data';

// 核心新增：按「月份+年份」分组事件
const groupEventsByMonthYear = (events) => {
  // 这里统一用2026年，和第一张图的年份一致
  const YEAR = "2026";
  return events.reduce((groups, event) => {
    // 从事件date提取月份（比如"15 May" → "May"）
    const month = event.date.split(' ')[1];
    const monthYear = `${month} ${YEAR}`;
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(event);
    return groups;
  }, {});
};

export default function Timeline() {
  // 调用分组函数
  const groupedEvents = groupEventsByMonthYear(timelineEvents);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 bg-gray-100 flex items-center gap-4 border-b">
        <Link href="/" className="text-blue-600 font-medium">‹ Back</Link>
        <h1 className="font-bold text-lg">Smart Timeline</h1>
      </div>

      <div className="p-6 relative">
        {/* 垂直时间线 */}
        <div className="absolute left-8 top-6 bottom-0 w-0.5 bg-gray-200"></div>

        {/* 遍历分组后的月份+年份 */}
        {Object.entries(groupedEvents).map(([monthYear, events]) => (
          <div key={monthYear} className="mb-8">
            {/* 月份+年份标题（和第一张图一致） */}
            <div className="pl-10 mb-4">
              <h2 className="text-lg font-bold text-gray-700">{monthYear}</h2>
            </div>

            {/* 渲染该月份下的所有事件 */}
            {events.map((event) => (
              <div key={event.id} className="relative mb-8 pl-10">
                {/* 时间点圆点 */}
                <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white shadow ${
                  event.status === 'due' ? 'bg-red-500' : 'bg-gray-400'
                }`}></div>

                {/* 事件卡片 */}
                <Link href={`/verify/${event.id}`}>
                  <div className={`p-4 rounded-lg shadow-sm border ${
                    event.status === 'due' ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'
                  }`}>
                    {event.status === 'due' && (
                      <span className="text-xs font-bold text-red-600 mb-1 block">🔴 DUE SOON</span>
                    )}
                    <h3 className="font-bold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.amount || event.location}</p>
                    <p className="text-xs text-gray-400 mt-2">{event.date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}