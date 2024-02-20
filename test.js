const express= require('express')
var app=express();

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
        return (num * factorial(num - 1));
}


function Multiples(base,limit) {
    const multiples = [];
    for (let i = 1; i <= limit; i++) {
        multiples.push(base * i);
    }
    return multiples;
}

function fib(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}


function cumulativeSum(num) {
    if (num === 0) {
        return 0;
    } else {
        return num + cumulativeSum(num - 1);
    }
}
function checkString(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

app.get('/' , function(req,res){
    res.send("start server")
})

app.get('/fact/:num',function(req,res){
    var result=factorial(req.params.num)
    res.json("fact is : " + result)
})

app.get('/fib/:num',function(req,res){
    var result=fib(req.params.num)
    res.json("fibonacci is : " + result)
})
app.get('/comusum/:num',function(req,res){
    var result=cumulativeSum(req.params.num)
    res.json("cumulative Sum is : " + result)
})
app.get('/mulitple/:num/:num',function(req,res){
    var result=Multiples(req.params.num ,req.params.num )
    res.json(" Multiples of the number are : " + result)
})
app.get('/checkString/:string',function(req,res){
    var result=checkString(req.params.string)
    res.json("is the string same as revers? : " + result)
})



var server= app.listen(7000, function()
    {
    var host = server.address().address // local one
    var port = server.address().port
    })

