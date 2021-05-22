const express = require('express');
const cors=require('cors');
const app=express();
const bodyParser = require('body-parser');
const fs = require('fs');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const hostname = '127.0.0.1';
const port = 3016;


app.use(cors());
app.use(urlencodedParser);
app.use(jsonParser);

app.get('/notas', (req: any, res: any) =>{
  
  let archivo = fs.readFileSync('notas.json');
  let notas = JSON.parse(archivo);

  res.send(notas);
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});