import { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: NaN,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({...prevProfile, name: name}))
  }
  const updateAge = (age: number) => {
    setProfile((prevProfile) => ({...prevProfile, age: Number(age)}))
  }
  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({...prevProfile, email: email}))
  }

  return (
    <div>
      <h1>User Profile👇</h1>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={isNaN(profile.age) ? "" : profile.age}
        onChange={(e) => updateAge(+e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
      <h3>Profile Summary:</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserProfile;
