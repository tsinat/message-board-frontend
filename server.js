'use strict'

const PORT = process.env.PORT || 5000;

let jade = require('jade');
let http = require('http');
let qs = require('qs');
var moment = require('moment');

let nodeStatic = require('node-static');
var myDate = moment().format('MMMM Do YYYY, h:mm:ss a');
let file = new nodeStatic.Server('./public');

http.createServer((req, res) => {
        var temp = encodeURIComponent(req.url);
        console.log('rowUrl:', req.url);
        console.log('encoded:', temp);
        let myData = [{
            body: "Hey, isn't this Jade thing supposed to make our jobs easier",
            date: myDate,
            image: 'http://i.imgur.com/k37hPI3.jpg'
        }, {
            body: "I don't know, why are you asking me?",
            date: myDate,
            image: 'http://i.imgur.com/CyHNBdM.jpg'
        }, {
            body: "guys, don't worry it will get easier once u got uset to it",
            date: myDate,
            image: 'http://i.imgur.com/IKOQUI0.jpg'
        }]

        let html;
        let qsParts = req.url.split('?');
        let path = qsParts[0];

        switch (path) {
            case '/':
                {
                    html = jade.renderFile('./views/index.jade');
                    res.end(html);
                    break;
                }
            case '/message':
                {
                    html = jade.renderFile('./views/message.jade', {
                        messages: myData
                    });
                    res.end(html);
                }
        }

        file.serve(req, res);
    })
    .listen(PORT, err => {
        if (err) return console.log(err);
        console.log(`Node server listening on port ${PORT}`);
    });

function getMyData(value) {
    return value;
}
