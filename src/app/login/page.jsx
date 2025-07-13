'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorToast, SuccessToast } from '@/utility/FormHelper';
import PlainLayout from '@/components/Plain-Layout'; // path অনুযায়ী adjust করো

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = useState({ email: '', password: '' });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const res = await fetch('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    setSubmit(false);

    if (json.status === 'success') {
      SuccessToast('Welcome back!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } else {
      ErrorToast(json.data || 'Invalid credentials');
    }
  };

  return (
    <PlainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Login to Admin Panel</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Your Email"
              value={data.email}
              onChange={(e) => inputOnChange('email', e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => inputOnChange('password', e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              disabled={submit}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-300"
            >
              {submit ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </PlainLayout>
  );
};

export default LoginPage;
