import React from "react";
import "./index.css";

function App() {
  return (
    <div className="text-2xl border-2">
      <h1 className="text-center">My Todos</h1>

      <div className="flex border-2">
        <div className="name flex flex-col ml-5">
          <label className="text-xl">Name</label>
          <input className="border-2 w-40 h-7" type={Text} />
        </div>

        <div className="description flex flex-col ml-4">
          <label className="text-xl">Description</label>
          <input className="border-2 w-40 h-7" type={Text} />
        </div>

        <button className="border-2 ml-6">Add</button>
      </div>

      <div className="flex">
        <div>
          <p>Task 1</p>
          <p>Description</p>
        </div>
        <div>
          <button className="border-2">Tick</button>
          <button className="border-2">Tick</button>
        </div>
      </div>
    </div>
  );
}
export default App;
