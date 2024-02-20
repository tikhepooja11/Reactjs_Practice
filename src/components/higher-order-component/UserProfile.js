// original component - only focuses on rendering based on the authentication state
const UserProfile = ({ isLoggedIn, login, logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>User Profile</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
