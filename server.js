//Require express
const express= require('express')

//initialization to express
const app=express();


function logger(req, res, next) {
    console.table({ method: req.method, path: req.url });
    var date= new Date()
    if((date.getHours()<3|| date.getHours()>21)||(date.getDate()==0)||(date.getDate()==6)){
    next(res.send("<center><h1>Sorry we are actually closed ! </h1></center>"))
    }
    else {next()} 
    }

//logger middleware
function logger(req,res,next){
    console.table ( {method: req.method,  path: req.url});
    next()
}
//app level middleware (logger global)
app.use(logger);
//app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/views"));
//app.use('/images', express.static(__dirname + "/public/images"));
app.use('*/images',express.static('public/images'));

//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/img',express.static(path.join(__dirname, 'public/images')));

//Home page
app.get('/', (req,res)=>{

    res.sendFile(__dirname + '/views/Home.html');
});

//Our-Services page
app.get('/Our-Services',(req,res)=>{

    res.sendFile(__dirname + '/views/Our-Services.html');
});
//contact-us page
app.get('/Contact-us',(req,res)=>{

    res.sendFile(__dirname + '/views/Contact-us.html');
});
//css page
app.get('/css/style.css',(req,res)=>{

    res.sendFile(__dirname + '/public/css/style.css');
});


//Listen to the server
const port=2000;
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});//