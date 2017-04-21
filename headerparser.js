
var express = require ('express')
var path = require('path')
var ip = require("ip")
var app = express()
var getIp = require('ipware')().get_ip

var port = process.env.PORT || 5000

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || port, function(err) {

if (err) {return console.log('something bad happened', err)}
console.log('server is listening on '+port)
})

app.get('/api/whoami',function(req,res){

 var ipAdress = ip.address()
 //var ipAdress = getIp(req).clientIp
 var languageHeader= req.headers['accept-language']
 var language = /([^,]+)/.exec(languageHeader)[1]
 var userHeader = req.headers['user-agent'];
 var OS = /\(([^)]+)\)/.exec(userHeader)[1];

 var jsonout=JSON.stringify({"ip": ipAdress, "language": language, "OS": OS})
 
 console.log(jsonout)
 res.end(jsonout)
})


