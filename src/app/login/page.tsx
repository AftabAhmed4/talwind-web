"use client";  // Add this at the top

import React, { useState } from "react";


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6"> Login</h2>
        
        {isLoggedIn ? (
          <div className="text-center text-green-500">
            <h3 className="text-lg">You have successfully logged in!</h3>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        )}
        
        {!isLoggedIn && (
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account? 
            <a href="#" className="text-blue-500 hover:underline"> Sign up</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
