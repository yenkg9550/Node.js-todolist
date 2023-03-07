const headers = {
  "Access-Control-Allow-Headers": 'Conent-Type, Authorization, Content-Length, X-Requested-With',
  "Access-Control-Allow-Origin": '*',
  "Access-Control-Allow-Methods": 'PATCH, POST, GET, OPTIONS, DELETE',
  "Conent-Type": 'application/json'
}

function errorHandle(res) {
  res.writeHead(400, headers); 
  res.write(JSON.stringify({
    "status": "false",
    "message": '欄位未填寫正確，或無此 todo id' ,
  }));
  res.end()
}

module.exports = errorHandle