import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  useEffect(() => {
    if (!currentUser?.isAdmin) {
      navigate("/sign-in");
    }
    fetchUsers();
  }, [page, search]);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/admin/users?page=${page}&search=${search}&limit=5`
      );
      const data = await res.json();
      setUsers(data.users);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      setError("failed to fetch users");
      setLoading(false);
    }
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/user/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        return;
      }
      setUsers([data, ...users]);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError("Failed to create user");
    }
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/admin/user/update/${editingUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        return;
      }
      setUsers(
        users.map((user) => (user._id === editingUser._id ? data : user))
      );
      setEditingUser(null);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError("Failed to update user");
    }
  };
  const handleDeleteUser = async (userId) => {
    try {
      const res = await fetch(`/api/admin/user/delete/${userId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        return;
      }
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      setError("Failed to delete user");
    }
  };
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <form
        onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
        className="mb-4 p-4 bg-slate-100 rounded"
      >
        <h2 className="text-xl font-semibold mb-2">
          {editingUser ? "Edit User" : "Create New User"}
        </h2>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-slate-700 text-white p-2 rounded hover:opacity-95"
          >
            {editingUser ? "Update User" : "Create User"}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={() => {
                setEditingUser(null);
                setFormData({
                  username: "",
                  email: "",
                  password: "",
                });
              }}
              className="bg-gray-500 text-white p-2 rounded hover:opacity-95"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-2">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.email}</td>

                  <td className="p-2">
                    <button
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({
                          username: user.username,
                          email: user.email,
                          password: "",
                        });
                      }}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`px-3 py-1 rounded ${
              page === pageNum ? "bg-slate-700 text-white" : "bg-slate-100"
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
