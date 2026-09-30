const express = require('express')
const app = express()
const multer = require('multer')
const cors = require('cors')

app.use(cors())
app.use(express.json())
const upload = multer({
  dest : 'uploads/'
})

// app.post('/upload',upload.single('resume'),(req,res)=>{
//     console.log(req.file)
//     console.log(req.file.originalname)
//     console.log(req.file.filename)
//     console.log(req.file.mimetype)
//     res.json({mssg : 'File received successfully'})
// })

app.post('/upload',upload.single('resume'),(req,res)=>{
  const {name,age} = req.body;
  console.log("Name : "+name);
  console.log("Age : "+age);
  console.log("Original Filename : " + req.file.originalname);
  console.log("File type : "+req.file.mimetype);
  console.log("File size : "+req.file.size);
  res.json({mssg : "Successfully received file and other details"})
})

app.listen(8000,()=>{
  console.log("Server is running on 8000 port");
})