import React, { useState } from 'react'
import { motion } from "motion/react";
import Input from '../components/Input';
import { AtSign, UserRoundPen, KeySquare } from "lucide-react";
import { Link, useNavigate } from 'react-router';
import PasswordStrength from '../components/PasswordStrength';
import { useAuthStore } from '../store/authStore';

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { signup, error, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        await signup(email, password, name);
        navigate("/verify-email");
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8 border border">
        <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={UserRoundPen}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <PasswordStrength password={password} />
          { error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
          <motion.button
            type="submit"
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700"
          >
            Sign up
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">Already have an account?
            <Link to={"/login"} className="text-green-400 hover:underline">
                Login
            </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default SignupPage