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

export const recievMessage = (eventName, cb) => {
  socketInstance.on(eventName, cb);
};
export const sendMessage = (eventName, cb) => {
  socketInstance.emit(eventName, cb);
};
