const UserSidebar = ({ isOpen, onClose, users }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Users</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {users.map((user) => (
            <div key={user._id} className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  user.status === "online"
                    ? "bg-green-500"
                    : user.status === "busy"
                    ? "bg-red-500"
                    : "bg-gray-500"
                }`}
              ></div>
              <span className="text-gray-300">{user.email}</span>
            </div>
          ))}
        </div>

        {/* Add User Button */}
        <div className="p-4 border-t border-gray-800">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Add User</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
