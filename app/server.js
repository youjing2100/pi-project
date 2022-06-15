'use strict';

const express = require('express');
const timer = ms => new Promise( res => setTimeout(res, ms));

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

var sum = 0

// app.on('listening', function() {

// });

app.get('/pi', (req, res) => {
    // PI calculation
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.json({ pi: sum });
});

app.listen(PORT, HOST, async function() {
    var d = 1

    for (let i = 0; i < 1000000; i++) {
        if (i % 2 == 0) 
        {
            sum += 4/d
        }
        else
        {
            sum -= 4/d
        }
        d += 2
        console.log("Value of Pi is : ",sum);
        await timer(1000);
    }
});

console.log(`Running on http://${HOST}:${PORT}`);
