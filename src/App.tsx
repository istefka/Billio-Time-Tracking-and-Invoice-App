import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Timer from './components/Timer';
import { Clock, Calendar, TrendingUp } from 'lucide-react';

function App() {
  const handleTimerStop = (duration: number) => {
    console.log('Timer stopped after', duration, 'seconds');
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-purple-600" />
                <h1 className="text-2xl font-bold text-gray-900">Time Tracking</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="btn btn-secondary">
                  <Calendar className="h-5 w-5 mr-2" />
                  Calendar
                </button>
                <button className="btn btn-primary">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>

            <Timer onStop={handleTimerStop} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-4">Today's Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Project Research</p>
                      <p className="text-sm text-gray-500">Client Project</p>
                    </div>
                    <span className="font-mono text-gray-600">01:30:00</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Team Meeting</p>
                      <p className="text-sm text-gray-500">Internal</p>
                    </div>
                    <span className="font-mono text-gray-600">00:45:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-4">Active Projects</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Website Redesign</p>
                      <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">35%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-4">Weekly Summary</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Hours</span>
                    <span className="font-mono font-medium">32:15:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Billable Hours</span>
                    <span className="font-mono font-medium">28:45:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Non-billable Hours</span>
                    <span className="font-mono font-medium">03:30:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;