'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

export const Dashboard = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState<string | null>(null);

  const handleSignOut = async () => {
    setMessage('Signing out...');
    await signOut({ callbackUrl: '/' });
    setMessage(null); // Optional, since the callbackUrl will navigate away
  };

  const handleSignIn = async (provider: string) => {
    setMessage('Redirecting to sign in...');
    await signIn(provider);
    setMessage(null); // Optional, since signIn will handle redirection
  };

  return (
    <div className="flex justify-center items-center h-screen bg-amber-50">
      <div className="bg-orange-200 shadow-lg rounded-lg p-8 w-96 text-center">
        {session ? (
          <>
            {/* User's profile image */}
            <img
              src={session.user?.image as string}
              className="rounded-full h-20 w-20 mx-auto mb-4"
              alt="User Profile"
            />

            {/* Welcome Message */}
            <h1 className="text-2xl text-gray-800 font-bold mb-2">
              Welcome Back, {session.user?.name}
            </h1>
            <p className="text-gray-600 mb-4">{session.user?.email}</p>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="w-full py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
            >
              Sign Out
            </button>

            {/* Message while signing out */}
            {message && <div className="mt-4 text-green-600">{message}</div>}
          </>
        ) : (
          <>
            {/* Sign-In Message */}
            <h1 className="text-2xl text-gray-800 font-bold mb-4">
              You are not logged in
            </h1>

            {/* Sign-In Button */}
            <button
              onClick={() => handleSignIn('github')}
              className="w-full py-2 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition"
            >
              Sign in with GitHub
            </button>

            {/* Message while signing in */}
            {message && <div className="mt-4 text-amber-700">{message}</div>}
          </>
        )}
      </div>
    </div>
  );
};
