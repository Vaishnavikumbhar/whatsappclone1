// node server which will handle socket io connections
const io = require('socket.io')(8000, {
  cors: {
    origin: "*"
  }
})

const users = {};

io.on('connection', socket =>{
  socket.on('new-user-joined',name=>{
    console.log("New user",name)
    users[socket.id] = name;
    socket.emit('user-joined',name)
  });  
  socket.on('send',message =>{
    socket.emit('receive',{message:message,name: user[socket.id]})
  });
})
