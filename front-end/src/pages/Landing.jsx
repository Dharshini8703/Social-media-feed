import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Lock, Phone, Mail } from 'lucide-react';

function Landing() {
  const [isLogin, setIsLogin] = useState(true);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl ">
        <div className="relative w-full md:h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              {isLogin ? (
                // Login Form
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Welcome Back</h2>
                    <div className="space-y-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
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
                  <div className="hidden md:flex bg-gradient-to-br from-blue-400  p-12 flex-col justify-center items-center text-white">
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
              ) : (
                // Signup Form
                <div className="grid md:grid-cols-2 h-full">
                  {/* Desktop Login Section */}
                  <div className="hidden md:flex bg-gradient-to-br from-blue-400  p-12 flex-col justify-center items-center text-white">
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
                    <div className="space-y-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          placeholder="Contact Number"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Landing;