import React from "react";
import FloatingShapes from "./components/FloatingShapes";
import {Route,Routes} from "react-router-dom"
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import VerificationEmail from "./pages/VerificationEmail";
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center  justify-center relative overflow-hidden">
      <FloatingShapes
        color="bg-green-500"
        size="w-64 h-64"
        top="top-[-5%]"
        left="left-[10%]"
        delay={0}
      />
      <FloatingShapes
        color="bg-emerald-500"
        size="w-48 h-48"
        top="top-[-15%]"
        left="left-[70%]"
        delay={0.4}
      />
      <FloatingShapes
        color="bg-lime-500"
        size="w-32 h-32"
        top="top-[-10%]"
        left="left-[10%]"
        delay={0.6}
      />

      <Routes>
        <Route path="/" element={"Home"}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/verify-email" element={<VerificationEmail/>}/>
        
      </Routes>
    </div>
  );
};

export default App;
