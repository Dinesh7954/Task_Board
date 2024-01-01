import { Link } from "react-router-dom";





const HomePage = () => {

    
  return (
    <>
      <div className="flex justify-center text-xl bg-gray-500 text-black">
        <span className="p-4 font-semibold">Welcome to TaskBoard</span>
      </div>
      <div className="flex justify-between text-2xl bg-white">
        <Link to={"/login"} className="bg-blue-400 p-4 m-2 rounded-lg hover:bg-blue-700" >
          Please Click here for login
        </Link>
        <Link to={"/register"} className="bg-blue-400 p-4 m-2 rounded-lg  hover:bg-blue-700" >
          Please Click here for Register
        </Link>
      </div>
    </>
  );
};

export default HomePage;
