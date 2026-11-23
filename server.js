const express=require("express")
const app=express()
const path=require("path")
app.get("/page1",(req, res)=>{
	res.send(`<h1> hello wolrd</>`)

})
app.get("/page2",(req,res)=>{
	res.sendFile(path.join(__dirname,"form.html"))
})
app.get("/process",(req,res)=>{
	name=req.query.txt1
	tell=req.query.txt2
	res.send(`hi <b>${name}</b> i will call you <b>${tell}</b>`)
})
app.listen(5000)