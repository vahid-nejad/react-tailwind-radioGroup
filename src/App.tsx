import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

import "./App.css";
import RadioGroup from "./components/RadioGroup";

function App() {
  return (
    <div className="mx-auto w-96 px-5 py-10 shadow my-10">
      <RadioGroup
        onChange={(option) => console.log(option)}
        labelText="Gender"
        options={[
          <div className="flex flex-1 justify-around">
            <span>Male</span>
            <UserIcon className="w-4" />
          </div>,
          <div className="flex  flex-1 justify-around">
            <span>Female</span>
            <UserIcon className="w-4" />
          </div>,
        ]}
      />
    </div>
  );
}

export default App;
