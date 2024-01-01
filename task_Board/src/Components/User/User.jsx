/* eslint-disable */
import { useEffect, useState } from "react";
import Create from "../Create/Create";
import axios from "axios";
import "../../../App.css";
import { BsCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";



const User = () => {
  const [additem, setAdditem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6565/get")
      .then((result) => setAdditem(result.data))
      .catch((err) => console.log(err));
  }, []);


  const handleEdit = (id) =>{
    axios
    .put(`http://localhost:6565/update/${id}`)
    .then(result => {
      location.reload();
    })
    .catch(err=> console.log(err));

  }

  const handleDelete = (id ) =>{
    axios
    .delete(`http://localhost:6565/delete/${id}`)
    .then(result => {
       location.reload();
      })
    .catch(err => console.log(err))

  }


  return (
    <>
      <div className="flex justify-between text-xl bg-gray-500 text-black ">
        <span className="p-4 font-semibold mx-5">Welcome {}</span>
        <span className="p-4 font-semibold mx-8">Logout</span>
      </div>

      <div className="container flex">
        <div className=" bg-green-200 text-black text-xl w-[15rem] h-[15rem]">
          <p className="text-xl font-bold p-4">Create New List</p>
          <button
            className="text-xl bg-blue-500 rounded-xl p-2 m-3"
            
          >
            Click here
          </button>
        </div>

        <div className="  text-black w-[15rem] h-[15rem] mx-3 ">
          <div className="justify-center">
            <p className="text-xl font-semibold"> List 1</p>
            <Create />

            {additem.map((add) => (
              <div className="task">
                  <div className="checkbox" onClick={() =>handleEdit(add._id)}>
                    {
                      add.done?
                      <BsCheckCircleFill  className="icon"></BsCheckCircleFill >:
                      <BsCircleFill className="icon" />
                    }
                    <p className={add.done ? "line_through":""}>{add.task}</p>
                  </div>
                <div>
                  <span>
                    <BsFillTrashFill className="icon" onClick={() =>handleDelete(add._id)}/>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
