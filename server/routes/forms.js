const router = require("express").Router();
const { spawn }=require("child_process");
const { log } = require("console");


var data;

router.post("/", async (req, res) => {
    data = req.body;
    const childpython=spawn('python',['gred_pred.py',JSON.stringify(data)]);

    childpython.stdout.on('data',(data)=>{
        console.log(data.toString());
        });
})


module.exports = router;
