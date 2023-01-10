const router = require("express").Router();
const { spawn }=require("child_process");


var data;

router.post("/", async (req, res) => {
    data = req.body;
    console.log(".......");
    console.log((data));
    const childpython=spawn('python',['gred_pred.py',JSON.stringify(data)]);

    childpython.stdout.on('data',(data)=>{
});
})


module.exports = router;
