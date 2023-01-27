import React, { useState } from "react";
import CustomDatePicker from "./components/CustomDatePicker";
import Input from "./components/Input";
import TextValidationList from "./components/TextValidationList";
import { PASSWORD_RULES } from "./constants";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className=" bg-darkModeBg pt-10 text-white flex flex-wrap min-h-screen">
        <div className="w-[335px] mx-auto">
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <div className="mt-5">
            <TextValidationList text={password} rules={PASSWORD_RULES} />
          </div>
        </div>
        <div className="w-[335px] mx-auto">
          <CustomDatePicker label="Birthday" />
        </div>
      </div>
    </div>
  );
}

export default App;
