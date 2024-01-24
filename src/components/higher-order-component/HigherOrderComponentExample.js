// App using the enhanced component

const AuthUserProfile = withAuthentication(UserProfile);

const HigherOrderComponentExample = () => {
  return (
    <div>
      <h1>Authentication Higher Order Component Example</h1>
      <AuthUserProfile />
    </div>
  );
};

export default HigherOrderComponentExample;
