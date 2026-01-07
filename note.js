import express from "express";
import cors from "cors";
import { v4 } from "uuid";

const app = express();

app.use(cors());
app.use(express.json());

let noteArr=[

]

app.get("/show-note",(req,res)=>{

  res.json({success:"true",message:"Succesfully Data Fetched",err:"",data:noteArr})
})

app.post("/add-note",(req,res)=>{

  let {title,text,color} = req.body

  if(!title || !text){
    return res.json({success:"false",message:"",err:"Title or Text Missing",data:""})
  }

  let obj={
    id:v4(),
    title,
    text,
    color
  }

  noteArr.push(obj)

  return res.json({success:"true",message:"Data Recieved",err:"",data:noteArr})
})
















app.listen("5010",()=>{
  console.log("Note Backend Running")
})