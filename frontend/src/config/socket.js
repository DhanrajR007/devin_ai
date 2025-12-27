import socket from "socket.io-client";
let socketInstance = null;

export const initializeSocket = (projectId) => {
  if (socketInstance) {
    socketInstance.disconnect();
  }
  socketInstance = socket("http://localhost:3000", {
    auth: {
      token: localStorage.getItem("authToken"),
    },
    query: {
      projectId: projectId,
    },
  });

  socketInstance.on("connect", () => {
    console.log("Socket connected:", socketInstance.id);
  });

  socketInstance.on("connect_error", (err) => {
    console.log("Socket connection error:", err.message);
  });

  socketInstance.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
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
