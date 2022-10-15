var http = require('http')
var fs = require('fs')
var url = require('url');
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
    console.log(filename);
    fs.readFile(filename, function(error,data){
        if(error){
            res.writeHead(404);
            res.write('Error: File Not Found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})