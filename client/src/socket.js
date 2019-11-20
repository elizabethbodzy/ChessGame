
import io from "socket.io-client";

let socket;

export default function connect() {
    return new Promise((resolve, reject) => {
        if (socket) {
            resolve(socket);
        } else {
            socket = io(process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/' : '/');

            resolve(socket);
        }
    });


}
