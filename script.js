const socket = io("https://localhost:3000");

socket.on("chat-message", (data) => console.log(data));
