import React, { useEffect, useState } from "react";
import ChatSection from "../components/project/ChatSection";
import ProjectArea from "../components/project/ProjectArea";
import UserSidebar from "../components/project/UserSidebar";
import { useLocation } from "react-router-dom";
import { useUser } from "../context/ContextProvider";
import { getProjectById } from "../apis/projectApis";

const Project = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (location.state?.project?._id) {
      fetchProject(location.state.project._id);
    }
  }, [location]);

  const fetchProject = async (id) => {
    try {
      const project = await getProjectById(id);
      setUsers(project.project.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex h-screen bg-black overflow-hidden text-white font-sans">
      {/* Sidebar - Overlay */}
      <UserSidebar
        users={users}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Layout */}
      <div className="flex-1 flex w-full">
        {/* Left Panel - Chat */}
        <div className="w-1/3 min-w-[320px] max-w-[450px] border-r border-gray-800 h-full relative z-0">
          <ChatSection
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
