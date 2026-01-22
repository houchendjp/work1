// app/layout.js
import './globals.css';

export const metadata = {
  title: 'e-Boks',
  description: 'Mobile prototype',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-container">
        <main className="page-content">{children}</main>

        {/* 底部导航栏：宽度390px + 居中 + 固定在浏览器底部 */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
          <div className="bg-white border-t border-gray-200 
                        h-16 w-[390px] flex justify-around items-center shadow-lg">
            <div className="flex flex-col items-center justify-center text-red-700">
              <span className="text-xl">🏠</span>
              <span className="text-xs font-medium mt-1">Home</span>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <span className="text-xl">📁</span>
              <span className="text-xs font-medium mt-1">Archive</span>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-500">
              <span className="text-xl">⚙️</span>
              <span className="text-xs font-medium mt-1">Settings</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}