"use client"
import React, { useState, useEffect } from 'react';
// Assuming you would typically use a routing library (like react-router-dom)
// to get the current pathname. For this example, we'll simulate it or
// assume it's passed as a prop/hook. For simplicity, we'll remove it from the dependency array
// unless a real 'pathname' is provided.

export default function Dashboard() {
  // State for loading status (initially true while we check sessionStorage)
  const [loading, setLoading] = useState(true);
  // State for verification status (whether the user is logged in/verified)
  const [verified, setVerified] = useState(false);

  // Helper function to check login status from sessionStorage
  const isLoggedIn = () => {
    // Check if 'window' is defined (necessary for server-side rendering environments)
    if (typeof window === "undefined") return false;
    // Return true if the 'token' exists in sessionStorage
    return !!sessionStorage.getItem("token");
  };

  useEffect(() => {
    // Check login status
    const loggedIn = isLoggedIn();

    if (!loggedIn) {
      // If not logged in, set verified to false and stop loading
      setVerified(false);
      setLoading(false);
      // In a real app, you would typically redirect the user to a login page here.
      // E.g., history.push('/login');
      return; // Stop execution
    }

    // If logged in, set verified to true and stop loading
    setVerified(true);
    setLoading(false);
  }, []); // Empty dependency array means this runs ONLY once on component mount.
  // If you intended to recheck on route change (as in your original code),
  // you would need to get `pathname` from a router hook (e.g., useLocation)
  // and add it here: [pathname]

  // --- Rendering Logic ---

  // 1. Show a loading screen while checking storage
  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  // 2. If not logged in and loading is complete, return null (or a redirect component)
  // The original code only returned null, which hides the content.
  if (!verified) return null;

  // 3. If verified (logged in) and loaded, render the dashboard content
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold pb-3 mb-6 border-b-2">Dashboard</h1>
      <p className="mb-8 text-gray-600">Welcome back! Here's an overview of your data.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Reviews Overview</h2>
          <p className="text-gray-500">See your latest feedback and ratings.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Portfolio Stats</h2>
          <p className="text-gray-500">Track key metrics and performance.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-500">Timeline of your latest account actions.</p>
        </div>
      </div>
    </div>
  );
}