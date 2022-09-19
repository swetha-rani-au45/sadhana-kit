const express = require("express");
const path =  require("path");
require("./db/conn");
const User= require("./models/usermessesges");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

//setting the path

const staticpath = path.join(_dirname, "../public");
const templetspath = path.join(_dirname, "../templets/views");
const partialspath = path.join(_dirname, "../templets/partials");

//middleware
app.use('/css' , express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/css' , express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/css' , express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templetspath);
hbs.registerPartials(partialpath);

//routing
//app.get(path, callback)
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");

})

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("./contact", async(req, res) => {
    try{
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("/")
        }catch (error) {
        res.status(500).send(error)  
    }
})

//server create
app.listen(port, () => {
console.log( `server is running at port no ${port}`);
} ) 