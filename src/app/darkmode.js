'use client';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setMode('light');
    }
  }, []);

  const enableDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    setMode('dark');
  };

  const enableLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    setMode('light');
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={enableLight}
        className={`px-4 py-2 rounded border ${
          mode === 'light' ? 'bg-gray-300 text-black' : 'bg-white text-gray-600'
        }`}
      >
        Light
      </button>
      <button
        onClick={enableDark}
        className={`px-4 py-2 rounded border ${
          mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-600'
        }`}
      >
        Dark
      </button>
    </div>
  );
}
