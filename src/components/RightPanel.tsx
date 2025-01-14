import React from 'react';
import { Bell } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="hidden lg:block w-64 bg-gray-50 p-4 border-l">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <Bell className="text-blue-500" size={20} />
              <div>
                <p className="text-sm font-medium">Notification {i}</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}