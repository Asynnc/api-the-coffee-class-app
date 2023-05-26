import http from 'node:http';
import { Server } from 'socket.io';
import { app } from './app';

const server = http.createServer(app);
export const io = new Server(server);

server.listen(process.env.PORT_SERVER, () => {
  console.log(`✅ Server listening on port ${process.env.PORT_SERVER}`);
});
