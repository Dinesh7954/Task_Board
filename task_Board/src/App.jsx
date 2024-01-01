/* eslint-disable */
import {BrowserRouter ,Routes, Route}  from "react-router-dom"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import HomePage from "./Components/Home/HomePage"
import User from "./Components/User/User"
function App() {

  return (
    

      <BrowserRouter>

        <Routes>


        <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/register" element={<SignUp /> }> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/user" element={<User />}> </Route>
          
        </Routes>

      </BrowserRouter>



    
  )
}

export default App;
