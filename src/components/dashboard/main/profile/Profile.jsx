import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    profilePic: "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png", // Placeholder profile picture
    password: "********", // Hidden password for display
  });

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
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.firstName}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.lastName}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.email}</p>
                )}
              </div>
              <div>
                <label className="text-white font-bold">Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                ) : (
                  <p className="text-gray-300">{user.password}</p>
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
