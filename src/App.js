import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-black sm:w-1/2 p-4">
        <h1 className="text-white text-center">My Todos</h1>

        {/* Input  */}
        <div className="input flex p-2 items-center">
          <div className="Name flex flex-col ">
            <label className="text-white">Name</label>
            <input className="rounded-lg" type={Text} />
          </div>
          <div className="Desc flex flex-col ml-2">
            <label className="text-white">Description</label>
            <input className="rounded-lg" type={Text} />
          </div>
          <button className="bg-orange-500 text-white ml-auto px-2 rounded-full">
            Add Task
          </button>
        </div>

        {/* Tasks Listed */}

        {/* First Task */}
        <div className="flex border-2 justify-between items-center mt-5 px-2">
          <div>
            <p className="text-3xl text-white">Task 1</p>
            <p>Description</p>
          </div>
          <div className="flex justify-between">
            <button className="border-2 text-lg text-white">Complete</button>
            <button className="border-2 text-lg text-white">Delete</button>
          </div>
        </div>
        <div className="flex border-2 justify-between items-center mt-5 px-2">
          <div>
            {/* 2nd Task */}
            <p className="text-3xl text-white">Task 2</p>
            <p>Description</p>
          </div>
          <div className="flex justify-between ">
            <button className="border-2 text-lg text-white">Complete</button>
            <button className="border-2 text-lg text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
