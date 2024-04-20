import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'TestUser' && password === 'admin') {
      setError('');
      navigate('/dashboard')
    } else if (username === '' || password === '') {
      setError('Enter username and password');
    }
    else{
        setError('Invalid username and password');
    }
  };

  return (
     <div className="flex items-center justify-center h-screen">
      <div className="w-96 h-96 p-8 bg-white rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-2xl mb-4">Login</h2>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 h-12"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 h-12"
        />
        <Button onClick={handleLogin}>Login</Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;