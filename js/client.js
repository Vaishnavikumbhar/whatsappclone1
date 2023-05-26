const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");

const messageInput = document.getElementById("messageinp");
const messageContainer = document.querySelector(".container");

const append = (message) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add("position");
  messageContainer.append(messageElement);
};
const name = prompt("enter the your name to join");
socket.emit("new-user-joined", name);

socket.on("user-joined", (data) => {
  console.log(data);
  append(`${data} joined the chat`, "right");
});
