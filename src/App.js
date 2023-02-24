import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="text-2xl mx-5 border-2 mt-10 w-5/6">
        <h1 className="text-center">My Todos</h1>

        <div className="flex border-2 px-4 py-2">
          <div className="name flex flex-col">
            <label className="text-2xl">Task</label>
            <input className="border-2 w-40 h-7" type={Text} />
          </div>

          <div className="description flex flex-col ml-5">
            <label className="text-2xl">Description</label>
            <input className="border-2 w-40 h-7" type={Text} />
          </div>

          <button className="border-2 ml-auto mr-4 w-32">Add Task</button>
        </div>

        <div className="flex border-2 justify-between items-center mt-5 px-2">
          <div className="">
            <p className="text-3xl">Task 1</p>
            <p>Description</p>
          </div>
          <div className="flex justify-between w-52 ">
            <button className="border-2 w-24 text-lg">Complete</button>
            <button className="border-2 w-24 text-lg">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
