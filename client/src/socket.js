import io from "socket.io-client";

let socket;
export default function getSocket() {
  return new Promise((resolve, reject) => {
    if (socket) {
      resolve(socket);
    } else {
      socket = io(
        process.env.NODE_ENV !== "production" ? "http://localhost:3001/" : "/"
      );
      resolve(socket);
    }
  });
}

export function join({ name, room }) {
  return getSocket().then(socket => new Promise((resolve, reject) => {
    socket.emit("join", { name, room }, error => {
      if (error) {
        reject(error);
      }
      resolve(socket);
    })
  }));
}
