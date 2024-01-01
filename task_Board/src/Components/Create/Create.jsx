/* eslint-disable */
import { useState } from "react";
import axios from "axios";


const Create = () => {

 const [task , setTask] = useState();

const handleAdd = () =>{

    axios.post("http://localhost:6565/add", {task:task})
     .then(result =>{
      location.reload()
     })
     .catch(err => console.log(err))        
} 



  return (
    <>
      <div className="flex ">
        <div className="p-2">
          <input type="text"  placeholder="Enter Task" className="border-4" onChange={(e) =>setTask(e.target.value)}/>
        </div>
        <div>
          <button type="button" onClick={handleAdd}>
            <p className="p-1 text-xl font-semibold mx-12">Add</p>{" "}
          </button>
          
        </div>
        
      </div>
    </>
  );
};

export default Create;
