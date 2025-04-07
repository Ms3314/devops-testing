import { WebSocketServer } from "ws";


const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    console.log("New connection");
    socket.send("Hi there you are connected to the server");
})
