import React, { useState } from 'react'
import { motion } from "motion/react";
import Input from '../components/Input';
import { AtSign, KeySquare, LoaderCircle } from "lucide-react";
import { Link } from 'react-router';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useAuthStore();

    const handleLogin = async (e) => {
      e.preventDefault();
      await login(email, password);
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8 border border">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={AtSign}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={KeySquare}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Link to='/forgot-password' className='text-md text-green-400 hover:underline'>
              Forgot Password?
            </Link>
          </div>
          {error && <p className='text-red-500 font-semibold'>{error}</p>}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700"
          >
            {isLoading ? <LoaderCircle className='w-6 h-6 animate-spin mx-auto' /> : "Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">Don't have an account?
            <Link to={"/signup"} className="text-green-400 hover:underline">
                Sign up
            </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default LoginPage