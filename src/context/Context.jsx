'use client';
import React, { useState, useEffect } from 'react';
import UserData from '@/components/UserData';
import axios from 'axios';

const Context = () => {
  const [users, setusers] = useState([]);

  const fetchall = async () => {
    try {
      const res = await axios.get('https://vabhsinghdev-nu.vercel.app/api/All');
      console.log(res.data.alluser); // Debug API response
      setusers(res.data.alluser);
    } catch (error) {
      console.log(error);
      alert('Failed to fetch user data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchall();
    console.log(users); // Debug users state
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <UserData users={users} />
    </div>
  );
};

export default Context;