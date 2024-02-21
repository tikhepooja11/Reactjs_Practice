// original component - only focuses on rendering based on the authentication state
const UserProfile = ({ isLoggedIn, login, logout }) => {
  return (
    <div className="mx-auto  left-0 right-0 my-36 h-30 w-4/12 bg-pink-200 text-center ">
      {isLoggedIn ? (
        <>
          <h2>Logged In User - Pooja Tikhe</h2>
          <button onClick={logout} className="bg-red-500 m-3 p-3 text-center ">
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Login for more</h2>
          <button onClick={login} className=" bg-green-500 m-3 p-3 text-center">
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
