import io from "socket.io-client";

const SOCKET_URL = `http://localhost:5000`;
const socket = io(SOCKET_URL, {
  transports: ["websocket"], // Force WebSocket transport
});

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

export default socket;
