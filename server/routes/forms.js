const router = require("express").Router();
const { spawn }=require("child_process");
const { log } = require("console");


var data;

router.post("/", async (req, res) => {
    data = req.body;
    // console.log(data);
    // var obj=JSON.parse(data);
    // var val=Object.values(obj);
    // console.log(val);
    let values = []
    JSON.parse(JSON.stringify(data), (key,value)=>{ values.push(value) })
    console.log(values);
    // const childpython=spawn('python',['../../python/careerPredictionModel.ipynb',values]);
    
    // childpython.stdout.on('data',(data)=>{
        // console.log(data.toString());
// });
    
})


module.exports = router;
