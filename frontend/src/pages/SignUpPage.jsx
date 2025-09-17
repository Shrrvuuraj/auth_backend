import React, { useState } from "react";
import { animate, motion, scale } from "framer-motion";
import { Mail, User ,Lock} from "lucide-react";
import Input from "../components/Input";
import {PaasWordCriteria,PasswordMeter} from "../components/Password";


const SignUpPage = () => {
  function handleSignUP() {}

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden "
    >
      <div className="p-8">
        <h2 className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
         <form onSubmit={handleSignUP}>
        <Input
          icon={User}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          icon={Mail}
          type="email"
          placeholder="Email Addreess"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        {/* password strength meter */}
      <div className=" flex flex-col">
        
        
        <div>
           <PasswordMeter password={password}/>
          <PaasWordCriteria password={password}/>
        </div>

      </div>


        <motion.button
        className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-green-400 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transation duration-200"

        whileHover={{scale:1.02}}
        whileTap={{scale:0.98}}
        type="submit"
        >
          Sign Up
        </motion.button>
      </form>
      </div>
     
    </motion.div>
  );
};

export default SignUpPage;
