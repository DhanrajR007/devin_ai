import socket from "socket.io-client";
let socketInstance = null;

export const initializeSocket = (projectId) => {
  socketInstance = socket("http://localhost:3000", {
    auth: {
      token: localStorage.getItem("authToken"),
    },
    query: {
      projectId: projectId,
    },
  });
};

export const receiveMessage = (eventName, cb) => {
  if (socketInstance) {
    socketInstance.on(eventName, cb);
  }
};
export const sendMessage = (eventName, cb) => {
  if (socketInstance) {
    socketInstance.emit(eventName, cb);
  }
};
