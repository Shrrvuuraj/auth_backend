import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading=true
  return (
    <motion.div
      animate={{ y: [0, 20], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full  bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl p-1 text-center font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <Input
          icon={Mail}
          placeholder={"Enter Your Email"}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Input
          icon={Lock}
          placeholder={"Enter Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={"/forgot-password"} className="text-sm text-green-400"> Forgot Password ?</Link>
        <motion.button className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-green-400 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transation duration-200"
        
        whileHover={{scale:1.02}}
        whileTap={{scale:0.98}}
        disabled={isLoading}
        >
          {isLoading?<Loader className="w-6 h-6 mx-auto animate-spin"></Loader>:"Log in"}
        </motion.button>
      </div>
      <div className="px-8 py-4 bg-gray-900 text-gray-400 flex justify-center">
        Create an Account ? {" "}<Link to={"/signup" } className="hover:underline text-green-400">
        Sign UP</Link>
      </div>
    </motion.div>
  );
};

export default LoginPage;
