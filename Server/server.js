import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => 
  res.status(200).send({
    "message": "first end point working. hurrah",
}));

app.listen(3000);
console.log('app running on port ' , 3000);