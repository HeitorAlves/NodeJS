import express from 'express'

const app = express();

app.get("/",(request,response)=>{
    return response.json({hello:"Hello World"});
});

app.post("/",(request,response) => {

    return response.json({message: "Data is save sucessfully"});
});


app.listen(3333,()=> console.log("SERVER IS RUNNING!"))