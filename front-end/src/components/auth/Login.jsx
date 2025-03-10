import React, { useState } from 'react'
import { User, Lock } from 'lucide-react';
import { useContextData } from '../../context/Context';


function Login({isLogin, setIsLogin, page, setPage}) {

    const { loginUser } = useContextData();

    const [formData, setFormData] = useState({
        user_name: '',
        password: ''
    });

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
        setIsLogin(!isLogin);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formData).then((res) => {
          console.log("res----", res)
          if(res.data.status) {
            toast.success(res.data.message);
            setFormData({
              username: '',
              password: ''
            });
          } else {
            toast.error(res.data.error);
          }
        }) 
        .catch((error) => {
          toast.error(error || 'something wen wrong');
        })
    };

  return (
    <div className="grid md:grid-cols-2 h-full">
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Welcome Back</h2>
            <div className="space-y-6">
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
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
                    >
                        Log In
                    </button>
                </div>
            </form>
            </div>
            {/* Mobile Sign Up Link */}
            <div className="md:hidden mt-8 text-center">
                <p className="text-gray-600 mb-2">Don't have an account?</p>
                <button
                    onClick={() => paginate(1)}
                    className="text-blue-300 font-semibold hover:text-blue-400"
                >
                    Sign Up Here
                </button>
            </div>
        </div>
        {/* Desktop Sign Up Section */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-400 p-12 flex-col justify-center items-center text-white rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">New Here?</h3>
            <p className="text-center mb-8">Sign up and discover great opportunities!</p>
            <button
                onClick={() => paginate(1)}
                className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-400 transition-colors"
            >
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default Login