// const path = require('path');
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();
const app: Express = express();
// const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');
// const dbAgent = require('./database/dbAgent');

// app.use(express.static(publicPath));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const server = app.listen(port, () => {
  console.log('Server is up!');
});

// var io = require('socket.io')(server);

// io.on('connection', function(socket){
//   socket.on('join', (room) => {
//     socket.join(room);
//     console.log(socket.id, ' joining ', room);
//   });
//   socket.on('disconnect', (socket) => {
//     console.log('A user has disconnected.');
//   });
// });

// app.get('/api/game/:id', (req, res) => {
//   dbAgent.getGameByID(req.params.id)
//     .then((result) => {
//       res.json(result);
//     }).catch((e) => {
//       res.status(404).send(e.message);
//   });
// });

// app.post('/api/game', (req, res) => {
//   dbAgent.createGame(req.body)
//   .then((newGame) => {
//     res.json(newGame);
//   }).catch((e) => {
//     res.status(500).send(e.toString());
//   });
// });

// app.put('/api/game/:id', (req, res) => {
//   dbAgent.updateGameByID(req.params.id, req.body)
//     .then((result) => {
//       io.sockets.in(req.params.id).emit('updates', result);
//       res.json(result);
//     }).catch((error) => {
//       console.log(req.params.id, req.body);
//       res.status(500).send(error.toString());
//     });
// });

app.get('*', (req: Request, res: Response) => {
  // res.sendFile(path.join(publicPath, 'index.html'));
  res.send("hello world");
});
