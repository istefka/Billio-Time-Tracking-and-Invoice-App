import React, { useState, useEffect } from 'react';
import { Play, Pause, StopCircle, Tag, Folder } from 'lucide-react';
import { format } from 'date-fns';

interface TimerProps {
  onStop: (duration: number) => void;
}

export default function Timer({ onStop }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    if (!isRunning) {
      setStartTime(new Date());
    }
    setIsRunning(!isRunning);
  };

  const stopTimer = () => {
    setIsRunning(false);
    onStop(time);
    setTime(0);
    setStartTime(null);
    setDescription('');
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="What are you working on?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 text-lg font-medium placeholder-gray-400 focus:outline-none"
        />
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Tag className="h-5 w-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Folder className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-4 flex items-center justify-between">
        <div className="font-mono text-3xl font-medium tracking-tight">
          {formatTime(time)}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTimer}
            className={`p-3 rounded-xl transition-all duration-200 ${
              isRunning
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-green-50 text-green-600 hover:bg-green-100'
            }`}
          >
            {isRunning ? <Pause size={24} /> : <Play size={24} />}
          </button>
          {time > 0 && (
            <button
              onClick={stopTimer}
              className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-200"
            >
              <StopCircle size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}