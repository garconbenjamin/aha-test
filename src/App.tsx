import React, { useEffect, useState } from "react";
import { CheckCircleIcon as CheckFill } from "@heroicons/react/24/solid";
import { CheckCircleIcon as Check } from "@heroicons/react/24/outline";
import CustomDatePicker from "./components/CustomDatePicker";
import Input from "./components/Input";
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
      <div className="bg-black pt-10 text-white flex min-h-screen">
        <div className="w-[335px] mx-auto">
          <Input
            label="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
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
        <div className="w-[320px] mx-auto">
          <CustomDatePicker label="Birthday" />
        </div>
      </div>
    </div>
  );
}

export default App;
