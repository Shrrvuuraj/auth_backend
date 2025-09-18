import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VerificationEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsref = useRef([]);
  const navigate = useNavigate();
  const isLoading = false;

 

  return (
    <motion.div
      className="max-w-md w-full bg-gray-800 bg-opacity-50
    backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8"
      animate={{ y: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text text-center">
        Verify Your Email
      </h2>
      <p className="text-center mb-6 text-gray-300">verify your 6 digit code</p>
      <form className="space-y-6">
        <div className="flex justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsref.current[index] = el)}
              type="text"
              maxLength="6"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none "
            />
          ))}
        </div>
        <motion.button
          className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-green-400 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="w-6 h-6 mx-auto animate-spin"></Loader>
          ) : (
            "Log in"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default VerificationEmail;
