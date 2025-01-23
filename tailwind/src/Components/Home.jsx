import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-blue-600 text-white w-64 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/AddHospital"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Add Hospitals
              </Link>
            </li>
            <li>
              <Link
                to="/AllHospital"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                All Hospitals
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Header */}
        <header className="bg-blue-500 text-white p-4 rounded">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <p className="mt-2">Manage your settings, explore features, and more.</p>
        </header>

        {/* Content Area */}
        <main className="mt-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">
              Here is the main content area. You can add details about your
              account, recent activity, or other important information.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
