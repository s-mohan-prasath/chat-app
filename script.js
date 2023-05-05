const socket = io(`https://localhost:${process.env.PORT || 3000}`);

socket.on("chat-message", (data) => console.log(data));
