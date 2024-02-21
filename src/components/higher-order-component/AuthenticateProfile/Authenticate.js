import React, { useState } from "react";

const Authenticate = (UserProfile) => {
  const AuthenticatedComponent = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    return (
      <UserProfile
        isLoggedIn={isLoggedIn}
        login={login}
        logout={logout}
        {...props}
      />
    );
  };
  return AuthenticatedComponent;
};

export default Authenticate;
