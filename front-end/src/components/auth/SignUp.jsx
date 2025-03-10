import React, { useState } from 'react'
import { User, Lock } from 'lucide-react';
import { useContextData } from '../../context/Context';

function SignUp({isLogin, setIsLogin, page, setPage}) {
    const { addUserRegister } = useContextData();
    const [formData, setFormData] = useState({
        user_name: '',
        password: '',
        rePassword: '',
        bio: '',
      });
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.rePassword) {
          alert('Passwords do not match!');
          return;
        }
        addUserRegister(formData).then((res) => {
          console.log("res----", res)
          if(res.data.status) {
            toast.success(res.data.message);
            setFormData({
              username: '',
              password: '',
              rePassword: '',
              bio: ''
            });
          } else {
            toast.error(res.data.error);
          }
        }) 
        .catch((error) => {
          toast.error(error || 'something wen wrong');
        })
      };

      const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
        setIsLogin(!isLogin);
      };

  return (
    <div className="grid md:grid-cols-2 h-full">
        {/* Desktop Login Section */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-400  p-12 flex-col justify-center items-center text-white rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Already a Member?</h3>
            <p className="text-center mb-8">Login to access your account!</p>
            <button
                onClick={() => paginate(-1)}
                className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-400 transition-colors"
            >
                Login
            </button>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center md:col-start-2">
            {/* Mobile Login Link */}
            <div className="md:hidden mb-8 text-center">
                <p className="text-gray-600 mb-2">Already have an account?</p>
                <button
                    onClick={() => paginate(-1)}
                    className="text-blue-300 font-semibold hover:text-blue-400"
                >
                    Login Here
                </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="User Name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="password"
                        name="rePassword"
                        value={formData.rePassword}
                        onChange={handleChange}
                        placeholder="ReType Password"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                    />
                </div>

                <div className="mt-4 relative">
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Your Bio or Description"
                        className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300 min-h-[120px] resize-none"
                    />
                </div>

                {/* Signup Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp