// import io from "socket.io-client";

// // const SOCKET_URL = `http://localhost:8080`;
// const SOCKET_URL = `http://localhost:8080`;
// const headers = { transports: ["websocket"] };
// const socket = io(SOCKET_URL, headers);

// export default socket;

import { io } from "socket.io-client";

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling"],
});

export default socket;
