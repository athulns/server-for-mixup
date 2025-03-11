import { useState } from "react";

const Profile = () => {
  // Example user data (Replace with real user data in the future)
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Food lover, home cook, and recipe creator.",
    avatar: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1740216266~exp=1740219866~hmac=2e77c7d3f03b71215c5d814547de35b18428223bed19b39905d43a8d247ce551&w=900",
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center">My Profile</h2>
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <img
          src={user.avatar}
          alt="Profile Avatar"
          className="card-img-top rounded-circle mx-auto mt-3"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
