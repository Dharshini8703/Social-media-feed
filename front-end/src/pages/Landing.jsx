import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';

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


  return (
    <div>
      <Navbar />
    <div className="h-[700px]  flex items-center justify-center p-4">
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
                <Login isLogin={isLogin} setIsLogin={setIsLogin} page={page} setPage={setPage} />
              ) : (
                // Signup Form
                <SignUp isLogin={isLogin} setIsLogin={setIsLogin} page={page} setPage={setPage}/>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Landing;