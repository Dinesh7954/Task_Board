import express from "express";
import { PORT } from "./Config/Config.js";
import { mongodbURL } from "./Config/Config.js";
import cors from "cors";
import mongoose from "mongoose";
import { List } from "./Models/list.js";
import { User } from "./Models/user.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/register", (req, res) => {
  User.create(req.body)
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("password is incorrect ");
      }
    } else {
      res.json("no record existed");
    }
  });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  List.create({ task: task })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});



app.get("/get", (req, res)=>{
  List.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.put("/update/:id",(req, res)=>{
   const {id} = req.params;
   List.findByIdAndUpdate({_id:id},{done:true})
   .then(result => res.json(result))
   .catch(err => res.json(err))
})

app.delete("/delete/:id", (req,res)=>{
  const {id} =req.params;
  List.findByIdAndDelete({_id:id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})