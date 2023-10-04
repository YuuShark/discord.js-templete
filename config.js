// uptime Robotで常時起動に使うのに必要
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Botがアクティブです \n');
  }).listen(8000)

// 呼ばないと常時起動できないので必ず記述
require('./index.js');
// require('');
