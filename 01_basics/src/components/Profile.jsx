import { useState } from "react";

const Profile = () => {
  // Initialize state with an object containing name and age
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    console.log(e)
    const {name, value} = e.target
    setProfile((p) => ({
        ...p,
        [name]: value
    }))
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;