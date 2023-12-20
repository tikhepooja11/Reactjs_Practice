export class UserService {
  createUser = async (userObj) => {
    console.log("inside createUser() service" + userObj);
    return response.status(200).json(user);
  };
}
export default UserService;
