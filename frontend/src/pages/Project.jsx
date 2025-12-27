import React, { useEffect, useState } from "react";
import ChatSection from "../components/project/ChatSection";
import ProjectArea from "../components/project/ProjectArea";
import UserSidebar from "../components/project/UserSidebar";
import { useLocation } from "react-router-dom";
import { getProjectById } from "../apis/projectApis";
import {
  initializeSocket,
  receiveMessage,
  sendMessage,
} from "../config/socket";
import { useUser } from "../context/ContextProvider";

const Project = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [users, setUsers] = useState([]);
  // const [messages, setMessagess] = useState("");
  const { user } = useUser();

  const sendMessages = (message) => {
    sendMessage("project-message", {
      message: message.text,
      sender: user,
    });
  };

  const fetchProject = async (id) => {
    try {
      const project = await getProjectById(id);
      setUsers(project.project.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state?.project?._id) {
      fetchProject(location.state.project._id);
      initializeSocket(location.state?.project?._id);
    }

    receiveMessage("project-message", (data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="relative flex h-screen bg-black overflow-hidden text-white font-sans">
      {/* Sidebar - Overlay */}
      <UserSidebar
        users={users}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onUserAdded={() => fetchProject(location.state.project._id)}
      />

      {/* Main Layout */}
      <div className="flex-1 flex w-full">
        {/* Left Panel - Chat */}
        <div className="w-1/3 min-w-[320px] max-w-[450px] border-r border-gray-800 h-full relative z-0">
          <ChatSection
            name={location.state?.project.name}
            // setMessagess={setMessagess}
            // messages={messages}
            sendMessages={sendMessages}
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Right Panel - Project Area */}
        <div className="flex-1 h-full overflow-hidden bg-gray-950">
          <ProjectArea />
        </div>
      </div>

      {/* Overlay backdrop for sidebar on mobile if needed, or just z-index overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Project;
