const mongoose= require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifedTopology: true,
})

.then(()=> console.log("Connected to DB-GameChangers."))
.catch(err => console.error("MongoDB Connection Error!"));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Json parser

app.get('/', (req,res)=>{
    res.send("ROUTE EXAMPLE");
})
app.listen(PORT,()=>{
    console.log('Listen Examples');
})