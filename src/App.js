import React from "react";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="bg-black w-11/12 sm:w-1/2 p-4">
        <h1 className="text-white text-center text-2xl">My Todos</h1>

        {/* Input  */}
        <div className="input flex flex-col p-2 ">
          <div className="flex flex-col sm:flex-row">
            <div className="Name flex flex-col">
              <label className="text-white">Name</label>
              <input className="rounded-lg h-8 px-1" type={Text} />
            </div>
            <div className="Desc flex flex-col sm:ml-4">
              <label className="text-white">Description</label>
              <input className="rounded-lg h-8 px-1" type={Text} />
            </div>
          </div>
          <button className="bg-orange-500 text-white h-8 w-28 ml-auto px-2 rounded-full text-xl mt-4 sm:mt-0">
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
            <button className="border-2 text-lg text-white px-1">
              Complete
            </button>
            <button className="border-2 text-lg text-white px-1 ml-2">
              Delete
            </button>
          </div>
        </div>

        {/* 2nd Task */}
        <div className="flex border-2 justify-between items-center mt-5 px-2">
          <div>
            <p className="text-3xl text-white">Task 2</p>
            <p>Description</p>
          </div>
          <div className="flex justify-between">
            <button className="border-2 text-lg text-white px-1">
              Complete
            </button>
            <button className="border-2 text-lg text-white px-1 ml-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
