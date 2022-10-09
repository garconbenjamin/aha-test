import React, { useEffect, useState } from "react";
import { CheckCircleIcon as CheckFill } from "@heroicons/react/24/solid";
import { CheckCircleIcon as Check } from "@heroicons/react/24/outline";

import "./App.css";
const rules = [
  { message: "Have at least one uppercase letter", pattern: /[A-Z]/ },
  { message: "Have at least one lowercase letter", pattern: /[a-z]/ },
  { message: "Have at least one number", pattern: /\d/ },
  {
    message: "Have at least one special character (!@#$...etc)",
    pattern: /[^(a-zA-z\w\s)]/,
  },
  { message: "Longer than 8 characters", pattern: /.{8,}/ },
];
function App() {
  const [password, setPassword] = useState("");
  const [validatFlags, setValidatFlags] = useState<boolean[]>([]);
  useEffect(() => {
    const result = rules.map(({ pattern }) => Boolean(pattern.test(password)));
    setValidatFlags(result);
  }, [password]);
  return (
    <div className="App">
      <div className="bg-black pt-10 text-white">
        <div className="w-[335px] mx-auto">
          <div className="textfield">
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <div className="mt-5 py-2 bg-[#242424] rounded-xl">
            <ul className="">
              {rules.map(({ message }, i) => {
                const isValid = validatFlags[i];
                return (
                  <li key={i} className="flex py-[9.5px] items-center">
                    {isValid ? (
                      <CheckFill className="w-6 h-6 ml-3 mr-2.5 flex-shrink-0 text-[#00D1FF]" />
                    ) : (
                      <Check className="w-6 h-6 ml-3 mr-2.5 flex-shrink-0" />
                    )}
                    <span>{message}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
