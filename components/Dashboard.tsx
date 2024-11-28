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
    <>
      {session ? (
        <>
        {/* Account image */}
          <img
            src={session.user?.image as string}
            className="rounded-full h-20 w-20"
            alt="User Profile"
          />
          
          {/* After Signin this shows */}
          <h1 className="text-3xl text-black font-bold">
            Welcome Back {session.user?.name}
            <p className="text-xl mb-4 mt-2 font-normal">{session.user?.email}</p>
            <button
              onClick={handleSignOut}
              className="border border-none rounded-lg bg-red-500 text-white font-normal text-xl text-center px-3 py-2 mt-4"
            >
              Sign out
            </button>
          </h1>

          {/* message show while sign out*/}
          {message && <div className="mt-4 text-green-600">{message}</div>}
        </>
      ) : (
        <>

        {/* Signin page */}
          <h1 className="text-3xl text-black font-bold">You are not logged in</h1>
          <div className="flex space-x-5">
            <button
              onClick={() => handleSignIn('github')}
              className="border border-none rounded-lg bg-blue-500 text-white px-3 py-3"
            >
              Sign in with GitHub
            </button>
          </div>

          {/* message show while signin */}
          {message && <div className="mt-4 text-blue-600">{message}</div>}
        </>
      )}
    </>
  );
};
