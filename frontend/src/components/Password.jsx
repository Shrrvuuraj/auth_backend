import React from "react";
import { Check, X } from "lucide-react";

const PaasWordCriteria = ({ password }) => {
  const criteria = [
    { label: "At Least 6 Charcters", met: password.length >= 6 },
    { label: "Contains Uppercase Character", met: /[A-Z]/.test(password) },
    { label: "Contains Lowecase Character", met: /[a-z]/.test(password) },
    { label: "Contains a Number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];
  return (
    <div>
      {criteria.map((item, index) => (
        <div key={index} className="flex ">
          {item.met ? (
            <Check className="text-green-500" />
          ) : (
            <X className="text-gray-400" />
          )}
          <span className={item.met ? "text-green-500" : "text-gray-400"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
export { PaasWordCriteria };

export const PasswordMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength=0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[A-z]/) && pass.match(/[a-z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    return strength;
  };
  const strength = getStrength(password);
 const getLabel=(s)=>{
  if(s===0) return "Enter Password"
  if(s===1) return "Weak"
  if(s===2) return "Fair"
  if(s===3) return "Good"
  if(s==4) return "Strong"
 }
 
  const label=getLabel(strength)

 const getBgColor=(strength)=>{
  if(strength===0) return "bg-red-500"
  if(strength===1) return "bg-red-400"
  if(strength===2) return "bg-yellow-400"
  if(strength===3) return "bg-yellow-500"
  return "bg-green-500";}

  const getTextColor=(strength)=>{
  if(strength===0) return "text-gray-500"
  if(strength===1) return "text-red-500"
  if(strength===2) return "text-red-300"
  if(strength===3) return "text-yellow-500"
  return "text-green-500";
 }

  return (
   <div className="flex flex-col">
    <div className="flex justify-between text-gray-400 text-s">
      Password Strength <span className={`${getTextColor(strength)}`}>{label}</span>

    </div>
    <div className="w-full flex gap-1 ">
      {[...Array(4)].map((item,index)=>(
        <div key={index} className={`w-1/4 h-1 bg-gray-400 rounded-full mb-2 mt-1 ${index<strength?getBgColor(strength):"bg-gray-700"}`}>


        </div>
      ))}

    </div>
   </div>
  );
};
