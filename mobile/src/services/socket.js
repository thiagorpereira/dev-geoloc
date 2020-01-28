import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.15:3333", {
  autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
  // Ouvir cada new-dev, evento disparado no backend
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };
  socket.connect();

  /*socket.on("message", text => {
    console.log(text);
  });*/
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
