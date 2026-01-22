import React from 'react'

const PasswordStrength = ({ password }) => {
    const getStrength = (password) => {
        let str = 0;
        if(password.length >= 6) str++;
        if(password.match(/[a-z]/) && password.match(/[A-Z]/)) str++;
        if(password.match(/\d/)) str++;
        if(password.match(/[^a-zA-Z\d]/)) str++;
        return str;
    };

    const strength = getStrength(password);

    const getColor = (str) => {
        if(str === 0) return "bg-red-400";
		if (strength === 1) return "bg-red-300";
        if (strength === 2) return "bg-yellow-400";
        if (strength === 3) return "bg-yellow-300";
        return "bg-green-400";
    };

    const passStr = (str) => {
        if(str === 0) return "Very Weak";
        if (str === 1) return "Weak";
        if (str === 2) return "Fair";
        if (str === 3) return "Good";
        return "Strong";
    }

  return (
    <div className='mt-2'>
        <div className='flex justify-between items-center mb-1'>
            <span className='text-md text-gray-600'>Password strength:</span>
            <span className='text-md text-gray-600'>{passStr(strength)}</span>
        </div>
        <div className='flex space-x-1'>
            {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${i < strength ? getColor(strength) : "bg-gray-600"}`}/>
            ))}
        </div>
    </div>
  )
}

export default PasswordStrength