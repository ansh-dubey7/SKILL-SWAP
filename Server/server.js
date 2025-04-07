import express from 'express'

const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    res.json({
        message: "API WORKING",
    });
});



app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`);
})