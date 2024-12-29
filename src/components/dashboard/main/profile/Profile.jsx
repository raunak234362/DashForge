import { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.user?.userData);
  const [user, setUser] = useState(userData);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="h-[85vh] overflow-y-auto">
        <div className="flex w-full my-5 justify-center items-center">
          <div className="text-3xl font-bold text-white bg-cyan-500/50 shadow-xl px-5 py-1 mt-2 rounded-lg">
            Profile
          </div>
        </div>
        <div className="overflow-auto rounded-lg bg-blue-gray-800 drop-shadow-md p-6 w-full md:w-3/4 mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            {isEditing && (
              <input
                type="url"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleInputChange}
                className="mt-3 text-center p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Update Profile Picture URL"
              />
            )}
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-bold">Username</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.username}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="f_name"
                    value={formData.f_name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.f_name}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="l_name"
                    value={formData.l_name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.l_name}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.gmail}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.gmail}</p>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
