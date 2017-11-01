
var express = require('express');
var app = express();
var bodyParser =require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



var calc = require('./print');

myObj = 
[
        {
        "id":"11111",
        "ingred":"blabla",
        },
        {
        "id":"22222",
        "ingred":"dfdfdf",
        },
        {
        "id":"333333",
        "ingred":"cdccdc",
        },
        {
        "id":"444444",
        "ingred":"rgrgrrg",
        }
    ]
ww = 'aaaaaaaaaaaaaa';
app.get('/',function(request,respose){
    //respose.send('my first api');
    yy =calc(6);
    var xx =yy;
    respose.send(myObj);
    
    })
app.get('/second-api',function(request,respose){

    respose.send("this is my second api get ");
    
})

app.get('/ingredients', function(request, response) {
    response.send(myObj);
});


app.post('/second-api',function(request,response){
    

    myObj.push(request.text);
    response.status(200).send(myObj);
    
    })

app.put('/second-api/:element',function(req,res)
{


    res.send(req.params.element);



})






app.listen(3000,function(){
    
        console.log('first api running on port 3000')
    })
    