// Higher Order Component (HOC) for authentication - takes original UserProfile component & returns a new modified component as HOC
const withAuthentication = (WrappedComponent) => {
  // Returns a new component with enhanced functionality
  return function WithAuthentication(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
      setIsLoggedIn(true);
    };

    const logout = () => {
      setIsLoggedIn(false);
    };

    // Renders the original component with additional props
    return (
      <WrappedComponent
        {...props}
        isLoggedIn={isLoggedIn}
        login={login}
        logout={logout}
      />
    );
  };
};

export default withAuthentication;
