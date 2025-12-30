import React, { useState } from "react";

const UserSelectionModal = ({ users, isOpen, onClose, onAddUser }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  if (!isOpen) return null;

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSubmit = () => {
    onAddUser(selectedUsers);
    setSelectedUsers([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Add User</h2>
        <div className="flex-1 overflow-y-auto max-h-60 space-y-2 mb-4">
          {users.length === 0 ? (
            <p className="text-gray-400 text-center">
              No users available to add
            </p>
          ) : (
            users.map((user) => (
              <div
                key={user._id}
                onClick={() => handleSelectUser(user._id)}
                className={`flex items-center p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                  selectedUsers.includes(user._id)
                    ? "bg-blue-600/20 border border-blue-600"
                    : "bg-gray-800 hover:bg-gray-700 border border-transparent"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                    selectedUsers.includes(user._id)
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-500"
                  }`}
                >
                  {selectedUsers.includes(user._id) && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-gray-200">{user.email}</span>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={selectedUsers.length === 0}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              selectedUsers.length === 0
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Add Selected Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionModal;
